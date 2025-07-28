import * as vscode from 'vscode';
import { TextDocument, TextEdit } from 'vscode';
import * as path from 'path';
import { spawnSync } from 'child_process';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerDocumentFormattingEditProvider('z', {
            async provideDocumentFormattingEdits(
                document: TextDocument,
            ): Promise<TextEdit[]> {
                const filePath = document.fileName;
                const fileDir = path.dirname(filePath);
                const content = document.getText()

                try {
                    // 调用外部命令 `z fmt` 并通过 stdin 传递内容
                    const result = spawnSync('z', ['fmt', '-text'], {
                        input: content, // 通过 stdin 传递内容
                        cwd: fileDir, // 设置工作目录为文件所在目录
                        encoding: 'utf8',
                        timeout: 5000, // 防止挂起
                    });

                    if (result.error) {
                        const action = await vscode.window.showErrorMessage(
                            `Z command not found. Please ensure 'z' is installed and available in your PATH.`,
                            'Install Z',
                            'Cancel'
                        );
                        if (action === 'Install Z') {
                            // 打开 Z 的安装页面或文档
                            vscode.env.openExternal(vscode.Uri.parse('https://github.com/diiyw/z/releases'));
                        }
                        return [];
                    }

                    if (result.status !== 0) {
                        // 命令执行失败
                        const errorMsg = result.stderr || 'Unknown error';
                        vscode.window.showErrorMessage(`'z fmt' failed with exit code ${result.status}: ${errorMsg}`);
                        return [];
                    }

                    const formatted = result.stdout;

                    // 替换整个文档内容
                    const fullRange = new vscode.Range(
                        new vscode.Position(0, 0),
                        document.lineAt(document.lineCount - 1).range.end
                    );

                    return [
                        TextEdit.replace(fullRange, formatted)
                    ];
                } catch (error) {
                    // 捕获异常并提示用户
                    vscode.window.showErrorMessage(
                        `Z Formatting error: ${error instanceof Error ? error.message : String(error)}`
                    );
                    return [];
                }
            }
        })
    );

    // 语言服务器配置
    const serverModule = context.asAbsolutePath(
        path.join('dist', 'server.js')
    );

    // 语言服务器调试选项
    const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

    // 服务器配置
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    // 客户端配置
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'z' }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/*.z')
        }
    };

    // 创建并启动语言客户端
    client = new LanguageClient(
        'zLanguageServer',
        'Z Language Server',
        serverOptions,
        clientOptions
    );

    // 启动客户端，这也将启动服务器
    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}