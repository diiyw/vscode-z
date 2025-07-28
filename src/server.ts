import {
    createConnection,
    TextDocuments,
    Diagnostic,
    DiagnosticSeverity,
    ProposedFeatures,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    CompletionItemKind,
    TextDocumentPositionParams,
    TextDocumentSyncKind,
    InitializeResult,
    WorkspaceFolder,
    InsertTextFormat
} from 'vscode-languageserver/node';

import {
    TextDocument
} from 'vscode-languageserver-textdocument';

// 创建连接并监听进程输入输出
const connection = createConnection(ProposedFeatures.all);

// 创建简单文本文档管理器
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
    const capabilities = params.capabilities;

    // Does the client support the `workspace/configuration` request?
    hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );
    hasDiagnosticRelatedInformationCapability = !!(
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            // 告诉客户端服务器支持代码补全
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // 注册通知，当配置改变时通知服务器
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders((_event) => {
            connection.console.log('Workspace folder change event received.');
        });
    }
});

// Z语言关键字
const keywords: string[] = [
    'if', 'else', 'for', 'return', 'func', 'export', 'in', 'var'
];

// Z语言内置函数
const builtinFunctions: string[] = [
    'to_json', 'from_json', 'print', 'printf', 'sprintf', 'format', 'len', 'copy',
    'append', 'delete', 'splice', 'type_name', 'int', 'bool', 'float', 'char',
    'bytes', 'error', 'string', 'time', 'is_string', 'is_bool', 'is_float',
    'is_char', 'is_bytes', 'is_error', 'is_undefined', 'is_function',
    'is_callable', 'is_array', 'is_immutable_array', 'is_map', 'is_iterable', 'is_time'
];

// 常量
const constants: string[] = [
    'true', 'false', 'undefined'
];

connection.onCompletion(
    (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
        // 获取当前文档
        const document = documents.get(_textDocumentPosition.textDocument.uri);
        if (!document) {
            return [];
        }

        // 获取当前行文本
        const text = document.getText();
        const lines = text.split('\n');
        const lineNum = _textDocumentPosition.position.line;
        const line = lines[lineNum];

        // 简单判断触发补全的上下文
        let items: CompletionItem[] = [];

        // 添加关键字补全项
        keywords.forEach(keyword => {
            items.push({
                label: keyword,
                kind: CompletionItemKind.Keyword,
                data: `keyword-${keyword}`
            });
        });

        // 添加内置函数补全项
        builtinFunctions.forEach(func => {
            items.push({
                label: func,
                kind: CompletionItemKind.Function,
                data: `function-${func}`
            });
        });

        // 添加常量补全项
        constants.forEach(constant => {
            items.push({
                label: constant,
                kind: CompletionItemKind.Constant,
                data: `constant-${constant}`
            });
        });

        return items;
    }
);

connection.onCompletionResolve(
    (item: CompletionItem): CompletionItem => {
        if (item.data) {
            const [type, value] = item.data.split('-');
            switch (type) {
                case 'keyword':
                    item.detail = `${value} 关键字`;
                    item.documentation = `Z 语言 ${value} 关键字`;
                    break;
                case 'function':
                    item.detail = `${value} 内置函数`;
                    item.documentation = `Z 语言内置函数 ${value}`;
                    break;
                case 'constant':
                    item.detail = `${value} 常量`;
                    item.documentation = `Z 语言常量 ${value}`;
                    break;
            }
        }
        return item;
    }
);

// 监听文档变化
documents.listen(connection);

// 监听连接
connection.listen();