import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

export class ZFormatter implements ParseTreeVisitor<string> {
    private indentLevel = 0;
    private output = '';
    
    visit(tree: ParseTree): string {
        return tree.accept(this);
    }
    
    visitChildren(node: RuleNode): string {
        let result = '';
        for (let i = 0; i < node.childCount; i++) {
            result += node.getChild(i).accept(this);
        }
        return result;
    }
    
    visitTerminal(node: TerminalNode): string {
        const text = node.text;
        
        // Handle indentation
        if (text === '{') {
            this.indentLevel++;
            return ` ${text}\n${'\t'.repeat(this.indentLevel)}`;
        } 
        if (text === '}') {
            this.indentLevel = Math.max(0, this.indentLevel - 1);
            return `\n${'\t'.repeat(this.indentLevel)}${text}`;
        }
        
        // Handle operators
        if (['=',':=', '+', '-', '*', '/', '%', '<', '>', '!', '&', '|'].includes(text)) {
            return ` ${text} `;
        }
        
        // Handle commas
        if (text === ',') {
            return `${text} `;
        }
        
        return text;
    }
    
    visitErrorNode(node: ErrorNode): string {
        return node.text;
    }
    
    protected defaultResult(): string {
        return '';
    }
    
    protected aggregateResult(aggregate: string, nextResult: string): string {
        return aggregate + nextResult;
    }
}
