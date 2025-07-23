// Generated from d:/Workstation/vscode-z/syntax/z.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link zParser}.
 */
public interface zListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link zParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(zParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(zParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#stmtList}.
	 * @param ctx the parse tree
	 */
	void enterStmtList(zParser.StmtListContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#stmtList}.
	 * @param ctx the parse tree
	 */
	void exitStmtList(zParser.StmtListContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(zParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(zParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#assignStmt}.
	 * @param ctx the parse tree
	 */
	void enterAssignStmt(zParser.AssignStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#assignStmt}.
	 * @param ctx the parse tree
	 */
	void exitAssignStmt(zParser.AssignStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#exprStmt}.
	 * @param ctx the parse tree
	 */
	void enterExprStmt(zParser.ExprStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#exprStmt}.
	 * @param ctx the parse tree
	 */
	void exitExprStmt(zParser.ExprStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#blockStmt}.
	 * @param ctx the parse tree
	 */
	void enterBlockStmt(zParser.BlockStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#blockStmt}.
	 * @param ctx the parse tree
	 */
	void exitBlockStmt(zParser.BlockStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt(zParser.IfStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt(zParser.IfStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void enterForStmt(zParser.ForStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void exitForStmt(zParser.ForStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#forInStmt}.
	 * @param ctx the parse tree
	 */
	void enterForInStmt(zParser.ForInStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#forInStmt}.
	 * @param ctx the parse tree
	 */
	void exitForInStmt(zParser.ForInStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#returnStmt}.
	 * @param ctx the parse tree
	 */
	void enterReturnStmt(zParser.ReturnStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#returnStmt}.
	 * @param ctx the parse tree
	 */
	void exitReturnStmt(zParser.ReturnStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#branchStmt}.
	 * @param ctx the parse tree
	 */
	void enterBranchStmt(zParser.BranchStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#branchStmt}.
	 * @param ctx the parse tree
	 */
	void exitBranchStmt(zParser.BranchStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#exportStmt}.
	 * @param ctx the parse tree
	 */
	void enterExportStmt(zParser.ExportStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#exportStmt}.
	 * @param ctx the parse tree
	 */
	void exitExportStmt(zParser.ExportStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#emptyStmt}.
	 * @param ctx the parse tree
	 */
	void enterEmptyStmt(zParser.EmptyStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#emptyStmt}.
	 * @param ctx the parse tree
	 */
	void exitEmptyStmt(zParser.EmptyStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#simpleStmt}.
	 * @param ctx the parse tree
	 */
	void enterSimpleStmt(zParser.SimpleStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#simpleStmt}.
	 * @param ctx the parse tree
	 */
	void exitSimpleStmt(zParser.SimpleStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#incDecStmt}.
	 * @param ctx the parse tree
	 */
	void enterIncDecStmt(zParser.IncDecStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#incDecStmt}.
	 * @param ctx the parse tree
	 */
	void exitIncDecStmt(zParser.IncDecStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(zParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(zParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#conditionalExpr}.
	 * @param ctx the parse tree
	 */
	void enterConditionalExpr(zParser.ConditionalExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#conditionalExpr}.
	 * @param ctx the parse tree
	 */
	void exitConditionalExpr(zParser.ConditionalExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#logicalOrExpr}.
	 * @param ctx the parse tree
	 */
	void enterLogicalOrExpr(zParser.LogicalOrExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#logicalOrExpr}.
	 * @param ctx the parse tree
	 */
	void exitLogicalOrExpr(zParser.LogicalOrExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#logicalAndExpr}.
	 * @param ctx the parse tree
	 */
	void enterLogicalAndExpr(zParser.LogicalAndExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#logicalAndExpr}.
	 * @param ctx the parse tree
	 */
	void exitLogicalAndExpr(zParser.LogicalAndExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#equalityExpr}.
	 * @param ctx the parse tree
	 */
	void enterEqualityExpr(zParser.EqualityExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#equalityExpr}.
	 * @param ctx the parse tree
	 */
	void exitEqualityExpr(zParser.EqualityExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#relationalExpr}.
	 * @param ctx the parse tree
	 */
	void enterRelationalExpr(zParser.RelationalExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#relationalExpr}.
	 * @param ctx the parse tree
	 */
	void exitRelationalExpr(zParser.RelationalExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#addExpr}.
	 * @param ctx the parse tree
	 */
	void enterAddExpr(zParser.AddExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#addExpr}.
	 * @param ctx the parse tree
	 */
	void exitAddExpr(zParser.AddExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#mulExpr}.
	 * @param ctx the parse tree
	 */
	void enterMulExpr(zParser.MulExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#mulExpr}.
	 * @param ctx the parse tree
	 */
	void exitMulExpr(zParser.MulExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterUnaryExpr(zParser.UnaryExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitUnaryExpr(zParser.UnaryExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryExpr(zParser.PrimaryExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryExpr(zParser.PrimaryExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#selectorExpr}.
	 * @param ctx the parse tree
	 */
	void enterSelectorExpr(zParser.SelectorExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#selectorExpr}.
	 * @param ctx the parse tree
	 */
	void exitSelectorExpr(zParser.SelectorExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#indexExpr}.
	 * @param ctx the parse tree
	 */
	void enterIndexExpr(zParser.IndexExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#indexExpr}.
	 * @param ctx the parse tree
	 */
	void exitIndexExpr(zParser.IndexExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#sliceExpr}.
	 * @param ctx the parse tree
	 */
	void enterSliceExpr(zParser.SliceExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#sliceExpr}.
	 * @param ctx the parse tree
	 */
	void exitSliceExpr(zParser.SliceExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#callExpr}.
	 * @param ctx the parse tree
	 */
	void enterCallExpr(zParser.CallExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#callExpr}.
	 * @param ctx the parse tree
	 */
	void exitCallExpr(zParser.CallExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void enterArgumentList(zParser.ArgumentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void exitArgumentList(zParser.ArgumentListContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#operand}.
	 * @param ctx the parse tree
	 */
	void enterOperand(zParser.OperandContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#operand}.
	 * @param ctx the parse tree
	 */
	void exitOperand(zParser.OperandContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#exprList}.
	 * @param ctx the parse tree
	 */
	void enterExprList(zParser.ExprListContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#exprList}.
	 * @param ctx the parse tree
	 */
	void exitExprList(zParser.ExprListContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(zParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(zParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#intLit}.
	 * @param ctx the parse tree
	 */
	void enterIntLit(zParser.IntLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#intLit}.
	 * @param ctx the parse tree
	 */
	void exitIntLit(zParser.IntLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#floatLit}.
	 * @param ctx the parse tree
	 */
	void enterFloatLit(zParser.FloatLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#floatLit}.
	 * @param ctx the parse tree
	 */
	void exitFloatLit(zParser.FloatLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#charLit}.
	 * @param ctx the parse tree
	 */
	void enterCharLit(zParser.CharLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#charLit}.
	 * @param ctx the parse tree
	 */
	void exitCharLit(zParser.CharLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#stringLit}.
	 * @param ctx the parse tree
	 */
	void enterStringLit(zParser.StringLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#stringLit}.
	 * @param ctx the parse tree
	 */
	void exitStringLit(zParser.StringLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#boolLit}.
	 * @param ctx the parse tree
	 */
	void enterBoolLit(zParser.BoolLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#boolLit}.
	 * @param ctx the parse tree
	 */
	void exitBoolLit(zParser.BoolLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#undefinedLit}.
	 * @param ctx the parse tree
	 */
	void enterUndefinedLit(zParser.UndefinedLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#undefinedLit}.
	 * @param ctx the parse tree
	 */
	void exitUndefinedLit(zParser.UndefinedLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#arrayLit}.
	 * @param ctx the parse tree
	 */
	void enterArrayLit(zParser.ArrayLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#arrayLit}.
	 * @param ctx the parse tree
	 */
	void exitArrayLit(zParser.ArrayLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#mapLit}.
	 * @param ctx the parse tree
	 */
	void enterMapLit(zParser.MapLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#mapLit}.
	 * @param ctx the parse tree
	 */
	void exitMapLit(zParser.MapLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#mapElement}.
	 * @param ctx the parse tree
	 */
	void enterMapElement(zParser.MapElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#mapElement}.
	 * @param ctx the parse tree
	 */
	void exitMapElement(zParser.MapElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#funcLit}.
	 * @param ctx the parse tree
	 */
	void enterFuncLit(zParser.FuncLitContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#funcLit}.
	 * @param ctx the parse tree
	 */
	void exitFuncLit(zParser.FuncLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#parameters}.
	 * @param ctx the parse tree
	 */
	void enterParameters(zParser.ParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#parameters}.
	 * @param ctx the parse tree
	 */
	void exitParameters(zParser.ParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#importExpr}.
	 * @param ctx the parse tree
	 */
	void enterImportExpr(zParser.ImportExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#importExpr}.
	 * @param ctx the parse tree
	 */
	void exitImportExpr(zParser.ImportExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#errorExpr}.
	 * @param ctx the parse tree
	 */
	void enterErrorExpr(zParser.ErrorExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#errorExpr}.
	 * @param ctx the parse tree
	 */
	void exitErrorExpr(zParser.ErrorExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#immutableExpr}.
	 * @param ctx the parse tree
	 */
	void enterImmutableExpr(zParser.ImmutableExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#immutableExpr}.
	 * @param ctx the parse tree
	 */
	void exitImmutableExpr(zParser.ImmutableExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link zParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(zParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link zParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(zParser.IdentifierContext ctx);
}