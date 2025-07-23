import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ArrayLitContext, AssignStmtContext, BlockStmtContext, BranchStmtContext, ExportStmtContext, ExprStmtContext, ForInStmtContext, ForStmtContext, FuncLitContext, IfStmtContext, MapElementContext, MapLitContext, ParametersContext, ReturnStmtContext, zParser } from './generated/syntax/zParser';

// 格式化配置选项接口
export interface ZFormatterOptions {
    indentSize: number;
    useTabs: boolean;
    bracesOnSameLine: boolean;
    spaceAroundOperators: boolean;
    spaceAfterComma: boolean;
}

// 默认格式化配置选项
const defaultOptions: ZFormatterOptions = {
    indentSize: 4,
    useTabs: false,
    bracesOnSameLine: true,
    spaceAroundOperators: true,
    spaceAfterComma: true
};

export class ZFormatter implements ParseTreeVisitor<string> {
    private indentLevel = 0;
    private output = '';
    private options: ZFormatterOptions;

    constructor(options: Partial<ZFormatterOptions> = {}) {
        this.options = { ...defaultOptions, ...options };
    }

    // 获取当前缩进字符串
    private getIndent(): string {
        if (this.options.useTabs) {
            return '\t'.repeat(this.indentLevel);
        } else {
            return ' '.repeat(this.indentLevel * this.options.indentSize);
        }
    }

    visit(tree: ParseTree): string {
        if (tree instanceof IfStmtContext) {
            return this.visitIfStmt(tree);
        } else if (tree instanceof ForStmtContext) {
            return this.visitForStmt(tree);
        } else if (tree instanceof ForInStmtContext) {
            return this.visitForInStmt(tree);
        } else if (tree instanceof BlockStmtContext) {
            return this.visitBlockStmt(tree);
        } else if (tree instanceof FuncLitContext) {
            return this.visitFuncLit(tree);
        } else if (tree instanceof ParametersContext) {
            return this.visitParameters(tree);
        } else if (tree instanceof ReturnStmtContext) {
            return this.visitReturnStmt(tree);
        } else if (tree instanceof AssignStmtContext) {
            return this.visitAssignStmt(tree);
        } else if (tree instanceof ExprStmtContext) {
            return this.visitExprStmt(tree);
        } else if (tree instanceof ArrayLitContext) {
            return this.visitArrayLit(tree);
        } else if (tree instanceof MapLitContext) {
            return this.visitMapLit(tree);
        } else if (tree instanceof MapElementContext) {
            return this.visitMapElement(tree);
        } else if (tree instanceof ExportStmtContext) {
            return this.visitExportStmt(tree);
        } else if (tree instanceof BranchStmtContext) {
            return this.visitBranchStmt(tree);
        }
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): string {
        let result = '';
        for (let i = 0; i < node.childCount; i++) {
            result += this.visit(node.getChild(i));
        }
        return result;
    }

    visitTerminal(node: TerminalNode): string {
        const text = node.text;

        // Handle indentation
        if (text === '{') {
            this.indentLevel++;
            const braceStyle = this.options.bracesOnSameLine ? ` ${text}` : `\n${this.getIndent()}${text}`;
            return `${braceStyle}\n${this.getIndent()}`;
        }
        if (text === '}') {
            this.indentLevel = Math.max(0, this.indentLevel - 1);
            return `\n${this.getIndent()}${text}`;
        }

        // Handle all Z language operators
        const operators = [
            '=', ':=', '+', '-', '*', '/', '%', '<', '>', '!', '&', '|',
            '==', '!=', '<=', '>=', '&&', '||', '++', '--', '+=',
            '-=', '*=', '/=', '%=', '||=', '^', '?', ':'
        ];
        if (operators.includes(text)) {
            return this.options.spaceAroundOperators ? ` ${text} ` : text;
        }

        // Handle commas and semicolons
        if (text === ',') {
            return this.options.spaceAfterComma ? `${text} ` : text;
        }
        if (text === ';') {
            return `${text}\n${this.getIndent()}`;
        }

        // Handle all Z language keywords
        const keywords = [
            'if', 'else', 'for', 'in', 'return',
            'export', 'func', 'error', 'immutable'
        ];
        if (keywords.includes(text)) {
            // Add space after keywords
            return `${text} `;
        }

        return text;
    }

    // Handle block statement formatting
    private visitBlockStmt(ctx: BlockStmtContext): string {
        let result = this.options.bracesOnSameLine ? ' {' : '\n' + this.getIndent() + '{';
        this.indentLevel++;
        result += '\n' + this.getIndent();
        result += this.visit(ctx.stmtList());
        this.indentLevel--;
        result += '\n' + this.getIndent() + '}';
        return result;
    }

    // Handle if statement formatting
    private visitIfStmt(ctx: IfStmtContext): string {
        let result = 'if ';
        if (ctx.simpleStmt()) {
            result += this.visit(ctx.simpleStmt()!) + '; ';
        }
        result += this.visit(ctx.expression());
        result += this.visit(ctx.blockStmt());
        if (ctx.ELSE()) {
            result += ' else';
            if (ctx.statement()!.ifStmt()) {
                // Handle 'else if' case
                result += ' ' + this.visit(ctx.statement()!);
            } else {
                // Handle 'else' case
                result += this.visit(ctx.statement()!);
            }
        }
        return result;
    }

    // Handle for statement formatting
    private visitForStmt(ctx: ForStmtContext): string {
        let result = 'for ';
        if (ctx.simpleStmt(0)) {
            result += this.visit(ctx.simpleStmt(0)!) + '; ';
        } else {
            result += '; ';
        }
        if (ctx.expression()) {
            result += this.visit(ctx.expression()!) + '; ';
        } else {
            result += '; ';
        }
        if (ctx.simpleStmt(1)) {
            result += this.visit(ctx.simpleStmt(1)!);
        }
        result += this.visit(ctx.blockStmt());
        return result;
    }

    // Handle for-in loop formatting
    private visitForInStmt(ctx: ForInStmtContext): string {
        let result = 'for ';
        result += this.visit(ctx.identifier(0));
        if (ctx.COMMA()) {
            result += `, ${this.visit(ctx.identifier(1))}`;
        }
        result += ' in ';
        result += this.visit(ctx.expression());
        result += this.visit(ctx.blockStmt());
        return result;
    }

    // Handle function literal formatting
    private visitFuncLit(ctx: FuncLitContext): string {
        let result = 'func';
        result += this.visit(ctx.parameters());
        result += this.visit(ctx.blockStmt());
        return result;
    }

    // Handle parameters formatting
    private visitParameters(ctx: ParametersContext): string {
        let result = '(';
        if (ctx.identifier().length > 0) {
            const separator = this.options.spaceAfterComma ? ', ' : ',';
            result += ctx.identifier().map(id => this.visit(id)).join(separator);
        }
        result += ')';
        return result;
    }

    // Handle return statement formatting
    private visitReturnStmt(ctx: ReturnStmtContext): string {
        let result = 'return';
        if (ctx.expression()) {
            result += ' ' + this.visit(ctx.expression()!);
        }
        if (ctx.SEMI()) {
            result += ';';
        }
        return result;
    }

    // Handle assignment statement formatting
    private visitAssignStmt(ctx: AssignStmtContext): string {
        let result = this.visit(ctx.exprList(0));
        result += ' ' + ctx._op.text + ' ';
        result += this.visit(ctx.exprList(1));
        if (ctx.SEMI()) {
            result += ';';
        }
        return result;
    }

    // Handle expression statement formatting
    private visitExprStmt(ctx: ExprStmtContext): string {
        let result = this.visit(ctx.expression());
        if (ctx.SEMI()) {
            result += ';';
        }
        return result;
    }

    // Handle array literal formatting
    private visitArrayLit(ctx: ArrayLitContext): string {
        let result = '[';
        if (ctx.expression().length > 0) {
            result += ' ';
            const separator = this.options.spaceAfterComma ? ', ' : ',';
            result += ctx.expression().map(expr => this.visit(expr)).join(separator);
            result += ' ';
        }
        result += ']';
        return result;
    }

    // Handle map literal formatting
    private visitMapLit(ctx: MapLitContext): string {
        if (ctx.mapElement().length === 0) {
            return '{}';
        }

        let result = '{';
        this.indentLevel++;
        result += '\n' + this.getIndent();
        result += ctx.mapElement().map(elem => this.visit(elem)).join(',\n' + this.getIndent());
        this.indentLevel--;
        result += '\n' + this.getIndent() + '}';
        return result;
    }

    // Handle map element formatting
    private visitMapElement(ctx: MapElementContext): string {
        let result = '';
        if (ctx.STRING()) {
            result += ctx.STRING()!.text;
        } else if (ctx.identifier()) {
            result += this.visit(ctx.identifier()!);
        }
        result += ': ';
        result += this.visit(ctx.expression());
        return result;
    }

    // Handle export statement formatting
    private visitExportStmt(ctx: ExportStmtContext): string {
        let result = 'export ';
        result += this.visitBlockStmt(ctx.blockStmt())
        if (ctx.SEMI()) {
            result += ';';
        }
        return result;
    }

    // Handle break statement formatting
    private visitBranchStmt(ctx: BranchStmtContext): string {
        return 'break;';
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