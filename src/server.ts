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

// 添加child_process模块用于执行外部命令
import { spawn } from 'child_process';

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

// 验证文档的函数
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    const text = textDocument.getText();
    const diagnostics: Diagnostic[] = [];

    try {
        // 调用外部命令 'z check' 进行语法检查
        const checkResult = await runZCheck(text);

        // 解析检查结果
        if (checkResult) {
            try {
                const errors = JSON.parse(checkResult);
                for (const error of errors) {
                    if (error.Pos && error.Msg) {
                        const diagnostic: Diagnostic = {
                            severity: DiagnosticSeverity.Error,
                            range: {
                                start: { line: error.Pos.Line - 1, character: error.Pos.Column - 1 },
                                end: { line: error.Pos.Line - 1, character: error.Pos.Column }
                            },
                            message: error.Msg,
                            source: 'z'
                        };
                        diagnostics.push(diagnostic);
                    }
                }
            } catch (parseError) {
                connection.console.error(`Failed to parse 'z check' output: ${parseError}`);
            }
        }
    } catch (error) {
        // 如果外部命令执行失败，回退到原来的简单括号检查
        connection.console.log(`Failed to run 'z check': ${error}`);
        fallbackValidation(textDocument, diagnostics);
    }

    // 发布诊断信息
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

// 运行 z check 命令
function runZCheck(content: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const child = spawn('z', ['check']);

        let stdout = '';
        let stderr = '';

        child.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        child.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        child.on('close', (code) => {
            if (code === 0) {
                resolve(stdout);
            } else {
                reject(new Error(`'z check' exited with code ${code}: ${stderr}`));
            }
        });

        child.on('error', (error) => {
            reject(error);
        });

        // 通过 stdin 传递文件内容
        child.stdin.write(content);
        child.stdin.end();
    });
}

// 回退验证方法（原来的简单括号检查）
function fallbackValidation(textDocument: TextDocument, diagnostics: Diagnostic[]): void {
    const text = textDocument.getText();

    // 检查语法错误的简单实现
    // 这里使用一个简单的启发式方法来检测潜在的错误

    // 检查括号匹配
    const bracketStack: { char: string, position: number }[] = [];
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '(' || char === '[' || char === '{') {
            bracketStack.push({ char, position: i });
        } else if (char === ')' || char === ']' || char === '}') {
            if (bracketStack.length === 0) {
                // 发现不匹配的右括号
                const diagnostic: Diagnostic = {
                    severity: DiagnosticSeverity.Error,
                    range: {
                        start: textDocument.positionAt(i),
                        end: textDocument.positionAt(i + 1)
                    },
                    message: `不匹配的括号 '${char}'`,
                    source: 'z'
                };
                diagnostics.push(diagnostic);
            } else {
                const lastBracket = bracketStack.pop()!;
                if ((char === ')' && lastBracket.char !== '(') ||
                    (char === ']' && lastBracket.char !== '[') ||
                    (char === '}' && lastBracket.char !== '{')) {
                    // 括号类型不匹配
                    const diagnostic: Diagnostic = {
                        severity: DiagnosticSeverity.Error,
                        range: {
                            start: textDocument.positionAt(i),
                            end: textDocument.positionAt(i + 1)
                        },
                        message: `括号类型不匹配，期望 '${getMatchingBracket(lastBracket.char)}' 但找到 '${char}'`,
                        source: 'z'
                    };
                    diagnostics.push(diagnostic);
                }
            }
        }
    }

    // 检查未闭合的左括号
    while (bracketStack.length > 0) {
        const unclosedBracket = bracketStack.pop()!;
        const diagnostic: Diagnostic = {
            severity: DiagnosticSeverity.Error,
            range: {
                start: textDocument.positionAt(unclosedBracket.position),
                end: textDocument.positionAt(unclosedBracket.position + 1)
            },
            message: `未闭合的括号 '${unclosedBracket.char}'`,
            source: 'z'
        };
        diagnostics.push(diagnostic);
    }
}

// 获取匹配的括号
function getMatchingBracket(bracket: string): string {
    switch (bracket) {
        case '(': return ')';
        case '[': return ']';
        case '{': return '}';
        case ')': return '(';
        case ']': return '[';
        case '}': return '{';
        default: return '';
    }
}

// 监听文档打开和变更事件
documents.onDidChangeContent(async (change) => {
    await validateTextDocument(change.document);
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