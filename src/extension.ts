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
                    
                    // Format using visitor
                    const formatter = new ZFormatter();
                    const formatted = tree.accept(formatter);
                    
                    return [TextEdit.replace(
                        new vscode.Range(
                            document.positionAt(0),
                            document.positionAt(text.length)
                        ),
                        formatted
                    )];
                } catch (error) {
                    // Fallback to original text if parsing fails
                    console.error('Formatting error:', error);
                    return [];
                }
            }
        })
    );
}
