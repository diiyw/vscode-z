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
    // 语言服务器配置
    const serverModule = context.asAbsolutePath(path.join("dist", "server.js"));

    // 语言服务器调试选项
    const debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

    // 服务器配置
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions,
        },
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
