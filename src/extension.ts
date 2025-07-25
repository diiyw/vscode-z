import * as vscode from 'vscode';
import { TextDocument, TextEdit} from 'vscode';
import * as path from 'path';
import { spawnSync } from 'child_process';


export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerDocumentFormattingEditProvider('z', {
            async provideDocumentFormattingEdits(
                document: TextDocument,
            ): Promise<TextEdit[]> {
                const filePath = document.fileName;
                const fileDir = path.dirname(filePath);

                try {
                    // 调用外部命令 `z fmt`
                    const result = spawnSync('z', ['fmt', path.basename(filePath)], {
                        input: filePath,
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
}

export function deactivate() {}