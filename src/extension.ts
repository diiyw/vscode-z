import * as vscode from "vscode";
import * as path from "path";
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
    // 语言服务器配置 - 使用外部可执行文件 zpls
    const serverModule = "zpls";

    // 服务器配置 - 只使用 stdio 通信方式
    const serverOptions: ServerOptions = {
        run: { command: serverModule, transport: TransportKind.stdio },
        debug: { command: serverModule, transport: TransportKind.stdio },
    };

    // 客户端配置
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: "file", language: "z" }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher("**/*.z"),
        },
    };

    // 创建并启动语言客户端
    client = new LanguageClient(
        "ZLanguageServer",
        "Z Language Server",
        serverOptions,
        clientOptions
    );

    // 启动客户端（这不会阻塞后续代码的执行）
    client.start();

    // 注册调试适配器
    const debugAdapterPath = context.asAbsolutePath(
        path.join("dist", "debugAdapter.js")
    );
    const debugProvider = new DebugAdapterDescriptorFactoryWithSocket(
        debugAdapterPath
    );
    context.subscriptions.push(
        vscode.debug.registerDebugAdapterDescriptorFactory("z", debugProvider)
    );

    vscode.window.showInformationMessage("Z Language Server is now active!");
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}

// Debug adapter descriptor factory
class DebugAdapterDescriptorFactoryWithSocket
    implements vscode.DebugAdapterDescriptorFactory
{
    constructor(private readonly adapterPath: string) {}

    createDebugAdapterDescriptor(
        _session: vscode.DebugSession
    ): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
        return new vscode.DebugAdapterExecutable("node", [this.adapterPath]);
    }
}