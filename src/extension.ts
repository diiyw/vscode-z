import * as vscode from 'vscode';
import { FormattingOptions, TextDocument, TextEdit } from 'vscode';
import { ZFormatter } from './formatter';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { zLexer } from './generated/syntax/zLexer';
import { zParser } from './generated/syntax/zParser';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerDocumentFormattingEditProvider('z', {
            provideDocumentFormattingEdits(
                document: TextDocument,
                options: FormattingOptions
            ): TextEdit[] {
                const text = document.getText();

                try {
                    // Create lexer and parser
                    const inputStream = CharStreams.fromString(text);
                    const lexer = new zLexer(inputStream);
                    const tokenStream = new CommonTokenStream(lexer);
                    const parser = new zParser(tokenStream);

                    // Parse the program
                    const tree = parser.program();

                    // Get formatting options from VS Code configuration
                    const config = vscode.workspace.getConfiguration('z.format');
                    const formatterOptions = {
                        indentSize: config.get<number>('indentSize', 4),
                        useTabs: config.get<boolean>('useTabs', false),
                        bracesOnSameLine: config.get<boolean>('bracesOnSameLine', true),
                        spaceAroundOperators: config.get<boolean>('spaceAroundOperators', true),
                        spaceAfterComma: config.get<boolean>('spaceAfterComma', true)
                    };

                    // Format using visitor with configuration options
                    const formatter = new ZFormatter(formatterOptions);
                    const formatted = tree.accept(formatter);

                    return [TextEdit.replace(
                        new vscode.Range(
                            document.positionAt(0),
                            document.positionAt(text.length)
                        ),
                        formatted
                    )];
                } catch (error) {
                    // 显示错误通知给用户
                    vscode.window.showErrorMessage(`Z Formatting error: ${error instanceof Error ? error.message : String(error)}`);
                    return [];
                }
            }
        })
    );
}