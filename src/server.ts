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
    InsertTextFormat,
    Definition,
    Location,
    Range,
    DocumentFormattingParams,
    TextEdit,
    Position,
} from "vscode-languageserver/node";

import { TextDocument } from "vscode-languageserver-textdocument";

// 添加child_process和path模块用于执行外部命令和路径处理
import { spawn, spawnSync } from "child_process";
import * as path from "path";
import * as fs from "fs";
import { URI, Utils } from 'vscode-uri'
import { workspace } from "vscode";

// 创建连接并监听进程输入输出
const connection = createConnection(ProposedFeatures.all);

// 创建简单文本文档管理器
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;
let hasFormattingCapability: boolean = false;

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
    hasFormattingCapability = !!(
        capabilities.textDocument && capabilities.textDocument.formatting
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            // 告诉客户端服务器支持代码补全
            completionProvider: {
                resolveProvider: true,
            },
            definitionProvider: true,
            documentFormattingProvider: true,
        },
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true,
            },
        };
    }
    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // 注册通知，当配置改变时通知服务器
        connection.client.register(
            DidChangeConfigurationNotification.type,
            undefined
        );
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders((_event) => {
            connection.console.log("Workspace folder change event received.");
        });
    }
});

// 验证文档的函数
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    const text = textDocument.getText();
    const diagnostics: Diagnostic[] = [];

    try {
        // 调用外部命令 'z diagnostic' 进行语法检查
        const checkResult = await runZDiagnostic(text);

        // 解析检查结果
        if (checkResult) {
            try {
                const errors = JSON.parse(checkResult);
                for (const error of errors) {
                    if (error.Pos && error.Msg) {
                        const diagnostic: Diagnostic = {
                            severity: DiagnosticSeverity.Error,
                            range: {
                                start: {
                                    line: error.Pos.Line - 1,
                                    character: error.Pos.Column - 1,
                                },
                                end: {
                                    line: error.Pos.Line - 1,
                                    character: error.Pos.Column,
                                },
                            },
                            message: error.Msg,
                            source: "z",
                        };
                        diagnostics.push(diagnostic);
                    }
                }
            } catch (parseError) {
                connection.console.error(
                    `Failed to parse 'z diagnostic' output: ${parseError}`
                );
            }
        }
    } catch (error) {
        // 如果外部命令执行失败，回退到原来的简单括号检查
        connection.console.log(`Failed to run 'z diagnostic': ${error}`);
    }

    // 发布诊断信息
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

// 运行 z diagnostics 命令
function runZDiagnostic(content: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const child = spawn("z", ["diagnostic"]);

        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (data) => {
            stdout += data.toString();
        });

        child.stderr.on("data", (data) => {
            stderr += data.toString();
        });

        child.on("close", (code) => {
            if (code === 0) {
                resolve(stdout);
            } else {
                reject(
                    new Error(
                        `'z diagnostic' exited with code ${code}: ${stderr}`
                    )
                );
            }
        });

        child.on("error", (error) => {
            reject(error);
        });

        // 通过 stdin 传递文件内容
        child.stdin.write(content);
        child.stdin.end();
    });
}

// 监听文档打开和变更事件
documents.onDidChangeContent(async (change) => {
    await validateTextDocument(change.document);
});

// Z语言关键字
const keywords: string[] = [
    "if",
    "else",
    "for",
    "return",
    "func",
    "export",
    "in",
];

// Z语言内置函数
const builtinFunctions: string[] = [
    "to_json",
    "from_json",
    "print",
    "printf",
    "sprintf",
    "format",
    "len",
    "copy",
    "append",
    "delete",
    "splice",
    "type_name",
    "int",
    "bool",
    "float",
    "char",
    "bytes",
    "error",
    "string",
    "time",
    "is_string",
    "is_bool",
    "is_float",
    "is_char",
    "is_bytes",
    "is_error",
    "is_undefined",
    "is_function",
    "is_callable",
    "is_array",
    "is_immutable_array",
    "is_map",
    "is_iterable",
    "is_time",
];

// 常量
const constants: string[] = ["true", "false", "undefined"];

connection.onCompletion(
    (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
        // 获取当前文档
        const document = documents.get(_textDocumentPosition.textDocument.uri);
        if (!document) {
            return [];
        }

        // 获取当前行文本
        const text = document.getText();
        const lines = text.split("\n");
        const lineNum = _textDocumentPosition.position.line;
        const line = lines[lineNum];

        // 简单判断触发补全的上下文
        let items: CompletionItem[] = [];

        // 添加关键字补全项
        keywords.forEach((keyword) => {
            items.push({
                label: keyword,
                kind: CompletionItemKind.Keyword,
                data: `keyword-${keyword}`,
            });
        });

        // 添加内置函数补全项
        builtinFunctions.forEach((func) => {
            items.push({
                label: func,
                kind: CompletionItemKind.Function,
                insertText: `${func}($1)`,
                insertTextFormat: InsertTextFormat.Snippet,
                data: `function-${func}`,
            });
        });

        // 添加常量补全项
        constants.forEach((constant) => {
            items.push({
                label: constant,
                kind: CompletionItemKind.Constant,
                data: `constant-${constant}`,
            });
        });

        return items;
    }
);

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    if (item.data) {
        const [type, value] = item.data.split("-");
        switch (type) {
            case "keyword":
                item.detail = `${value} 关键字`;
                item.documentation = `Z 语言 ${value} 关键字`;
                break;
            case "function":
                item.detail = `${value} 内置函数`;
                item.documentation = `Z 语言内置函数 ${value}`;
                break;
            case "constant":
                item.detail = `${value} 常量`;
                item.documentation = `Z 语言常量 ${value}`;
                break;
        }
    }
    return item;
});

// 处理定义跳转请求
connection.onDefinition(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }
    const offset = document.offsetAt(params.position);
    const code = document.getText();
    const body = JSON.stringify({
        code,
        offset: offset,
    });

    try {
        // 调用外部命令 'z definition'
        const definitionResult = await runZDefinition(body);

        // 解析结果
        if (definitionResult) {
            const result = JSON.parse(definitionResult);

            // 如果存在 import 字段，表示需要跳转到导入的模块
            if (result.import) {
                // 获取当前工作目录
                const currentDir = URI.file(document.uri);
                // 构建目标文件路径
                const targetFilePath = Utils
                    .joinPath(currentDir, `${result.import}`)
                // 检查文件是否存在
                connection.console.log(
                    `z definition result: ${targetFilePath}`
                );
                if (await workspace.fs.stat(targetFilePath)) {
                    // 创建跳转位置
                    const location: Location = {
                        uri: targetFilePath.toString(),
                        range: Range.create(
                            Position.create(0, 0),
                            Position.create(0, 0)
                        ),
                    };
                    return location;
                }
            }

            // 如果存在 globals 字段且不为空，可以处理全局变量跳转
            // 此处可根据需要扩展
        }
    } catch (error) {
        connection.console.error(`Failed to run 'z definition': ${error}`);
    }

    return null;
});

// 运行 z definition 命令
function runZDefinition(body: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const child = spawn("z", ["definition"]);

        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (data) => {
            stdout += data.toString();
        });

        child.stderr.on("data", (data) => {
            stderr += data.toString();
        });

        child.on("close", (code) => {
            if (code === 0) {
                resolve(stdout);
            } else {
                reject(
                    new Error(
                        `'z definition' exited with code ${code}: ${stderr}`
                    )
                );
            }
        });

        child.on("error", (error) => {
            reject(error);
        });

        // 通过 stdin 传递参数
        child.stdin.write(body);
        child.stdin.end();
    });
}

// 文档格式化处理函数
connection.onDocumentFormatting(
    async (params: DocumentFormattingParams): Promise<TextEdit[]> => {
        const document = documents.get(params.textDocument.uri);
        if (!document) {
            return [];
        }

        try {
            const text = document.getText();
            const filePath = path.parse(document.uri.replace("file://", ""));

            // 调用外部命令 `z formatting` 并通过 stdin 传递内容
            const result = spawnSync("z", ["formatting", "-text"], {
                input: text,
                cwd: filePath.dir,
                encoding: "utf8",
                timeout: 5000,
            });

            if (result.error) {
                connection.console.error(
                    `Z command not found: ${result.error.message}`
                );
                return [];
            }

            if (result.status !== 0) {
                const errorMsg = result.stderr || "Unknown error";
                connection.console.error(
                    `'z formatting' failed with exit code ${result.status}: ${errorMsg}`
                );
                return [];
            }

            const formatted = result.stdout;

            // 替换整个文档内容
            const fullRange = Range.create(
                Position.create(0, 0),
                document.positionAt(text.length)
            );

            return [TextEdit.replace(fullRange, formatted)];
        } catch (error) {
            connection.console.error(
                `Z Formatting error: ${error instanceof Error ? error.message : String(error)
                }`
            );
            return [];
        }
    }
);

// 监听文档变化
documents.listen(connection);

// 监听连接
connection.listen();
