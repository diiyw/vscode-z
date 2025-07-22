// Generated from syntax/z.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./zParser";
import { StmtListContext } from "./zParser";
import { StatementContext } from "./zParser";
import { AssignStmtContext } from "./zParser";
import { ExprStmtContext } from "./zParser";
import { BlockStmtContext } from "./zParser";
import { IfStmtContext } from "./zParser";
import { ForStmtContext } from "./zParser";
import { ForInStmtContext } from "./zParser";
import { ReturnStmtContext } from "./zParser";
import { BranchStmtContext } from "./zParser";
import { ExportStmtContext } from "./zParser";
import { EmptyStmtContext } from "./zParser";
import { SimpleStmtContext } from "./zParser";
import { IncDecStmtContext } from "./zParser";
import { ExpressionContext } from "./zParser";
import { ConditionalExprContext } from "./zParser";
import { LogicalOrExprContext } from "./zParser";
import { LogicalAndExprContext } from "./zParser";
import { EqualityExprContext } from "./zParser";
import { RelationalExprContext } from "./zParser";
import { AddExprContext } from "./zParser";
import { MulExprContext } from "./zParser";
import { UnaryExprContext } from "./zParser";
import { PrimaryExprContext } from "./zParser";
import { SelectorExprContext } from "./zParser";
import { IndexExprContext } from "./zParser";
import { SliceExprContext } from "./zParser";
import { CallExprContext } from "./zParser";
import { ArgumentListContext } from "./zParser";
import { OperandContext } from "./zParser";
import { ExprListContext } from "./zParser";
import { LiteralContext } from "./zParser";
import { IntLitContext } from "./zParser";
import { FloatLitContext } from "./zParser";
import { CharLitContext } from "./zParser";
import { StringLitContext } from "./zParser";
import { BoolLitContext } from "./zParser";
import { UndefinedLitContext } from "./zParser";
import { ArrayLitContext } from "./zParser";
import { MapLitContext } from "./zParser";
import { MapElementContext } from "./zParser";
import { FuncLitContext } from "./zParser";
import { ParametersContext } from "./zParser";
import { ImportExprContext } from "./zParser";
import { ErrorExprContext } from "./zParser";
import { ImmutableExprContext } from "./zParser";
import { IdentifierContext } from "./zParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `zParser`.
 */
export interface zListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `zParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.stmtList`.
	 * @param ctx the parse tree
	 */
	enterStmtList?: (ctx: StmtListContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.stmtList`.
	 * @param ctx the parse tree
	 */
	exitStmtList?: (ctx: StmtListContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.exprStmt`.
	 * @param ctx the parse tree
	 */
	enterExprStmt?: (ctx: ExprStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.exprStmt`.
	 * @param ctx the parse tree
	 */
	exitExprStmt?: (ctx: ExprStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.blockStmt`.
	 * @param ctx the parse tree
	 */
	enterBlockStmt?: (ctx: BlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.blockStmt`.
	 * @param ctx the parse tree
	 */
	exitBlockStmt?: (ctx: BlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.forInStmt`.
	 * @param ctx the parse tree
	 */
	enterForInStmt?: (ctx: ForInStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.forInStmt`.
	 * @param ctx the parse tree
	 */
	exitForInStmt?: (ctx: ForInStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.branchStmt`.
	 * @param ctx the parse tree
	 */
	enterBranchStmt?: (ctx: BranchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.branchStmt`.
	 * @param ctx the parse tree
	 */
	exitBranchStmt?: (ctx: BranchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.exportStmt`.
	 * @param ctx the parse tree
	 */
	enterExportStmt?: (ctx: ExportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.exportStmt`.
	 * @param ctx the parse tree
	 */
	exitExportStmt?: (ctx: ExportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	enterEmptyStmt?: (ctx: EmptyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	exitEmptyStmt?: (ctx: EmptyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	enterSimpleStmt?: (ctx: SimpleStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	exitSimpleStmt?: (ctx: SimpleStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.incDecStmt`.
	 * @param ctx the parse tree
	 */
	enterIncDecStmt?: (ctx: IncDecStmtContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.incDecStmt`.
	 * @param ctx the parse tree
	 */
	exitIncDecStmt?: (ctx: IncDecStmtContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.conditionalExpr`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpr?: (ctx: ConditionalExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.conditionalExpr`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpr?: (ctx: ConditionalExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.logicalOrExpr`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.logicalOrExpr`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.logicalAndExpr`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.logicalAndExpr`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.equalityExpr`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpr?: (ctx: EqualityExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.equalityExpr`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpr?: (ctx: EqualityExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpr?: (ctx: RelationalExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpr?: (ctx: RelationalExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.addExpr`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.addExpr`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.mulExpr`.
	 * @param ctx the parse tree
	 */
	enterMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.mulExpr`.
	 * @param ctx the parse tree
	 */
	exitMulExpr?: (ctx: MulExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.unaryExpr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.unaryExpr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.selectorExpr`.
	 * @param ctx the parse tree
	 */
	enterSelectorExpr?: (ctx: SelectorExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.selectorExpr`.
	 * @param ctx the parse tree
	 */
	exitSelectorExpr?: (ctx: SelectorExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.indexExpr`.
	 * @param ctx the parse tree
	 */
	enterIndexExpr?: (ctx: IndexExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.indexExpr`.
	 * @param ctx the parse tree
	 */
	exitIndexExpr?: (ctx: IndexExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.sliceExpr`.
	 * @param ctx the parse tree
	 */
	enterSliceExpr?: (ctx: SliceExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.sliceExpr`.
	 * @param ctx the parse tree
	 */
	exitSliceExpr?: (ctx: SliceExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.callExpr`.
	 * @param ctx the parse tree
	 */
	enterCallExpr?: (ctx: CallExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.callExpr`.
	 * @param ctx the parse tree
	 */
	exitCallExpr?: (ctx: CallExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.intLit`.
	 * @param ctx the parse tree
	 */
	enterIntLit?: (ctx: IntLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.intLit`.
	 * @param ctx the parse tree
	 */
	exitIntLit?: (ctx: IntLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.floatLit`.
	 * @param ctx the parse tree
	 */
	enterFloatLit?: (ctx: FloatLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.floatLit`.
	 * @param ctx the parse tree
	 */
	exitFloatLit?: (ctx: FloatLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.charLit`.
	 * @param ctx the parse tree
	 */
	enterCharLit?: (ctx: CharLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.charLit`.
	 * @param ctx the parse tree
	 */
	exitCharLit?: (ctx: CharLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.stringLit`.
	 * @param ctx the parse tree
	 */
	enterStringLit?: (ctx: StringLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.stringLit`.
	 * @param ctx the parse tree
	 */
	exitStringLit?: (ctx: StringLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.boolLit`.
	 * @param ctx the parse tree
	 */
	enterBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.boolLit`.
	 * @param ctx the parse tree
	 */
	exitBoolLit?: (ctx: BoolLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.undefinedLit`.
	 * @param ctx the parse tree
	 */
	enterUndefinedLit?: (ctx: UndefinedLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.undefinedLit`.
	 * @param ctx the parse tree
	 */
	exitUndefinedLit?: (ctx: UndefinedLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.arrayLit`.
	 * @param ctx the parse tree
	 */
	enterArrayLit?: (ctx: ArrayLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.arrayLit`.
	 * @param ctx the parse tree
	 */
	exitArrayLit?: (ctx: ArrayLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.mapLit`.
	 * @param ctx the parse tree
	 */
	enterMapLit?: (ctx: MapLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.mapLit`.
	 * @param ctx the parse tree
	 */
	exitMapLit?: (ctx: MapLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.mapElement`.
	 * @param ctx the parse tree
	 */
	enterMapElement?: (ctx: MapElementContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.mapElement`.
	 * @param ctx the parse tree
	 */
	exitMapElement?: (ctx: MapElementContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.funcLit`.
	 * @param ctx the parse tree
	 */
	enterFuncLit?: (ctx: FuncLitContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.funcLit`.
	 * @param ctx the parse tree
	 */
	exitFuncLit?: (ctx: FuncLitContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.importExpr`.
	 * @param ctx the parse tree
	 */
	enterImportExpr?: (ctx: ImportExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.importExpr`.
	 * @param ctx the parse tree
	 */
	exitImportExpr?: (ctx: ImportExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.errorExpr`.
	 * @param ctx the parse tree
	 */
	enterErrorExpr?: (ctx: ErrorExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.errorExpr`.
	 * @param ctx the parse tree
	 */
	exitErrorExpr?: (ctx: ErrorExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.immutableExpr`.
	 * @param ctx the parse tree
	 */
	enterImmutableExpr?: (ctx: ImmutableExprContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.immutableExpr`.
	 * @param ctx the parse tree
	 */
	exitImmutableExpr?: (ctx: ImmutableExprContext) => void;

	/**
	 * Enter a parse tree produced by `zParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `zParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

