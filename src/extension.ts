import * as vscode from "vscode";
import * as path from "path";
import * as net from "net";
import {
    LanguageClient,
    LanguageClientOptions,
    StreamInfo,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
    // 服务器配置 - 使用 TCP 通信方式连接到外部LSP服务器
    let connectionInfo = {
        port: 60066,
        host: "127.0.0.1"
    };

    const serverOptions = () => {
        let socket = net.connect(connectionInfo);
        let result: StreamInfo = {
            writer: socket,
            reader: socket
        };
        return Promise.resolve(result);
    };

    // 客户端配置
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: "file", language: "z" }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher("**/*.z"),
        },
        // 添加自动重连功能
        connectionOptions: {
            maxRestartCount: 5,
        }
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
    implements vscode.DebugAdapterDescriptorFactory {
    constructor(private readonly adapterPath: string) { }

    createDebugAdapterDescriptor(
        _session: vscode.DebugSession
    ): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
        return new vscode.DebugAdapterExecutable("node", [this.adapterPath]);
    }
}