// Generated from syntax/z.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { zListener } from "./zListener";

export class zParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly IDENTIFIER = 4;
	public static readonly EXPONENT = 5;
	public static readonly INTEGER = 6;
	public static readonly FLOAT = 7;
	public static readonly CHAR = 8;
	public static readonly STRING = 9;
	public static readonly RAW_STRING = 10;
	public static readonly TRUE = 11;
	public static readonly FALSE = 12;
	public static readonly UNDEFINED = 13;
	public static readonly IF = 14;
	public static readonly ELSE = 15;
	public static readonly FOR = 16;
	public static readonly IN = 17;
	public static readonly RETURN = 18;
	public static readonly BREAK = 19;
	public static readonly CONTINUE = 20;
	public static readonly EXPORT = 21;
	public static readonly FUNC = 22;
	public static readonly IMPORT = 23;
	public static readonly ERROR = 24;
	public static readonly IMMUTABLE = 25;
	public static readonly PLUS = 26;
	public static readonly MINUS = 27;
	public static readonly STAR = 28;
	public static readonly SLASH = 29;
	public static readonly PERCENT = 30;
	public static readonly EQ = 31;
	public static readonly NOT = 32;
	public static readonly LBRACE = 33;
	public static readonly RBRACE = 34;
	public static readonly LBRACK = 35;
	public static readonly RBRACK = 36;
	public static readonly LPAREN = 37;
	public static readonly RPAREN = 38;
	public static readonly COMMA = 39;
	public static readonly DOT = 40;
	public static readonly COLON = 41;
	public static readonly SEMI = 42;
	public static readonly INC = 43;
	public static readonly DEC = 44;
	public static readonly ELLIPSIS = 45;
	public static readonly EQUAL = 46;
	public static readonly NOT_EQUAL = 47;
	public static readonly LTE = 48;
	public static readonly GTE = 49;
	public static readonly AND = 50;
	public static readonly OR = 51;
	public static readonly ADD_ASSIGN = 52;
	public static readonly SUB_ASSIGN = 53;
	public static readonly MUL_ASSIGN = 54;
	public static readonly QUO_ASSIGN = 55;
	public static readonly REM_ASSIGN = 56;
	public static readonly OR_ASSIGN = 57;
	public static readonly AND_ASSIGN = 58;
	public static readonly DEFINE = 59;
	public static readonly GT = 60;
	public static readonly LT = 61;
	public static readonly POUND = 62;
	public static readonly WS = 63;
	public static readonly COMMENT = 64;
	public static readonly RULE_program = 0;
	public static readonly RULE_stmtList = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_assignStmt = 3;
	public static readonly RULE_exprStmt = 4;
	public static readonly RULE_blockStmt = 5;
	public static readonly RULE_ifStmt = 6;
	public static readonly RULE_forStmt = 7;
	public static readonly RULE_forInStmt = 8;
	public static readonly RULE_returnStmt = 9;
	public static readonly RULE_branchStmt = 10;
	public static readonly RULE_exportStmt = 11;
	public static readonly RULE_emptyStmt = 12;
	public static readonly RULE_simpleStmt = 13;
	public static readonly RULE_incDecStmt = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_conditionalExpr = 16;
	public static readonly RULE_logicalOrExpr = 17;
	public static readonly RULE_logicalAndExpr = 18;
	public static readonly RULE_equalityExpr = 19;
	public static readonly RULE_relationalExpr = 20;
	public static readonly RULE_addExpr = 21;
	public static readonly RULE_mulExpr = 22;
	public static readonly RULE_unaryExpr = 23;
	public static readonly RULE_primaryExpr = 24;
	public static readonly RULE_selectorExpr = 25;
	public static readonly RULE_indexExpr = 26;
	public static readonly RULE_sliceExpr = 27;
	public static readonly RULE_callExpr = 28;
	public static readonly RULE_argumentList = 29;
	public static readonly RULE_operand = 30;
	public static readonly RULE_exprList = 31;
	public static readonly RULE_literal = 32;
	public static readonly RULE_intLit = 33;
	public static readonly RULE_floatLit = 34;
	public static readonly RULE_charLit = 35;
	public static readonly RULE_stringLit = 36;
	public static readonly RULE_boolLit = 37;
	public static readonly RULE_undefinedLit = 38;
	public static readonly RULE_arrayLit = 39;
	public static readonly RULE_mapLit = 40;
	public static readonly RULE_mapElement = 41;
	public static readonly RULE_funcLit = 42;
	public static readonly RULE_parameters = 43;
	public static readonly RULE_importExpr = 44;
	public static readonly RULE_errorExpr = 45;
	public static readonly RULE_immutableExpr = 46;
	public static readonly RULE_identifier = 47;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stmtList", "statement", "assignStmt", "exprStmt", "blockStmt", 
		"ifStmt", "forStmt", "forInStmt", "returnStmt", "branchStmt", "exportStmt", 
		"emptyStmt", "simpleStmt", "incDecStmt", "expression", "conditionalExpr", 
		"logicalOrExpr", "logicalAndExpr", "equalityExpr", "relationalExpr", "addExpr", 
		"mulExpr", "unaryExpr", "primaryExpr", "selectorExpr", "indexExpr", "sliceExpr", 
		"callExpr", "argumentList", "operand", "exprList", "literal", "intLit", 
		"floatLit", "charLit", "stringLit", "boolLit", "undefinedLit", "arrayLit", 
		"mapLit", "mapElement", "funcLit", "parameters", "importExpr", "errorExpr", 
		"immutableExpr", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'?'", "'..'", "'^'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'true'", "'false'", "'undefined'", "'if'", 
		"'else'", "'for'", "'in'", "'return'", "'break'", "'continue'", "'export'", 
		"'func'", "'import'", "'error'", "'immutable'", "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'='", "'!'", "'{'", "'}'", "'['", "']'", "'('", "')'", "','", 
		"'.'", "':'", "';'", "'++'", "'--'", "'...'", "'=='", "'!='", "'<='", 
		"'>='", "'&&'", "'||'", "'+='", "'-='", "'*='", "'/='", "'%='", "'||='", 
		"'&&='", "':='", "'>'", "'<'", "'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "IDENTIFIER", "EXPONENT", 
		"INTEGER", "FLOAT", "CHAR", "STRING", "RAW_STRING", "TRUE", "FALSE", "UNDEFINED", 
		"IF", "ELSE", "FOR", "IN", "RETURN", "BREAK", "CONTINUE", "EXPORT", "FUNC", 
		"IMPORT", "ERROR", "IMMUTABLE", "PLUS", "MINUS", "STAR", "SLASH", "PERCENT", 
		"EQ", "NOT", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "LPAREN", "RPAREN", 
		"COMMA", "DOT", "COLON", "SEMI", "INC", "DEC", "ELLIPSIS", "EQUAL", "NOT_EQUAL", 
		"LTE", "GTE", "AND", "OR", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "QUO_ASSIGN", 
		"REM_ASSIGN", "OR_ASSIGN", "AND_ASSIGN", "DEFINE", "GT", "LT", "POUND", 
		"WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(zParser._LITERAL_NAMES, zParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return zParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "z.g4"; }

	// @Override
	public get ruleNames(): string[] { return zParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return zParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(zParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, zParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.stmtList();
			this.state = 97;
			this.match(zParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmtList(): StmtListContext {
		let _localctx: StmtListContext = new StmtListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, zParser.RULE_stmtList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__2) | (1 << zParser.IDENTIFIER) | (1 << zParser.INTEGER) | (1 << zParser.FLOAT) | (1 << zParser.CHAR) | (1 << zParser.STRING) | (1 << zParser.RAW_STRING) | (1 << zParser.TRUE) | (1 << zParser.FALSE) | (1 << zParser.UNDEFINED) | (1 << zParser.IF) | (1 << zParser.FOR) | (1 << zParser.RETURN) | (1 << zParser.BREAK) | (1 << zParser.CONTINUE) | (1 << zParser.EXPORT) | (1 << zParser.FUNC) | (1 << zParser.IMPORT) | (1 << zParser.ERROR) | (1 << zParser.IMMUTABLE) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (zParser.NOT - 32)) | (1 << (zParser.LBRACE - 32)) | (1 << (zParser.LBRACK - 32)) | (1 << (zParser.LPAREN - 32)) | (1 << (zParser.SEMI - 32)))) !== 0)) {
				{
				{
				this.state = 99;
				this.statement();
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, zParser.RULE_statement);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 105;
				this.assignStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 106;
				this.exprStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 107;
				this.blockStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 108;
				this.ifStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 109;
				this.forStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 110;
				this.forInStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 111;
				this.returnStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 112;
				this.branchStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 113;
				this.exportStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 114;
				this.incDecStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 115;
				this.emptyStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt(): AssignStmtContext {
		let _localctx: AssignStmtContext = new AssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, zParser.RULE_assignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.exprList();
			this.state = 119;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (zParser.EQ - 31)) | (1 << (zParser.ADD_ASSIGN - 31)) | (1 << (zParser.SUB_ASSIGN - 31)) | (1 << (zParser.MUL_ASSIGN - 31)) | (1 << (zParser.QUO_ASSIGN - 31)) | (1 << (zParser.REM_ASSIGN - 31)) | (1 << (zParser.OR_ASSIGN - 31)) | (1 << (zParser.AND_ASSIGN - 31)) | (1 << (zParser.DEFINE - 31)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 120;
			this.exprList();
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 121;
				this.match(zParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprStmt(): ExprStmtContext {
		let _localctx: ExprStmtContext = new ExprStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, zParser.RULE_exprStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.expression();
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 125;
				this.match(zParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStmt(): BlockStmtContext {
		let _localctx: BlockStmtContext = new BlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, zParser.RULE_blockStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(zParser.LBRACE);
			this.state = 129;
			this.stmtList();
			this.state = 130;
			this.match(zParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, zParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(zParser.IF);
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 133;
				this.simpleStmt();
				this.state = 134;
				this.match(zParser.SEMI);
				}
				break;
			}
			this.state = 138;
			this.expression();
			this.state = 139;
			this.blockStmt();
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === zParser.ELSE) {
				{
				this.state = 140;
				this.match(zParser.ELSE);
				this.state = 141;
				this.statement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, zParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(zParser.FOR);
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 145;
				this.simpleStmt();
				this.state = 146;
				this.match(zParser.SEMI);
				}
				break;
			}
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__2) | (1 << zParser.IDENTIFIER) | (1 << zParser.INTEGER) | (1 << zParser.FLOAT) | (1 << zParser.CHAR) | (1 << zParser.STRING) | (1 << zParser.RAW_STRING) | (1 << zParser.TRUE) | (1 << zParser.FALSE) | (1 << zParser.UNDEFINED) | (1 << zParser.FUNC) | (1 << zParser.IMPORT) | (1 << zParser.ERROR) | (1 << zParser.IMMUTABLE) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (zParser.NOT - 32)) | (1 << (zParser.LBRACE - 32)) | (1 << (zParser.LBRACK - 32)) | (1 << (zParser.LPAREN - 32)))) !== 0)) {
				{
				this.state = 150;
				this.expression();
				}
			}

			this.state = 153;
			this.match(zParser.SEMI);
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 154;
				this.simpleStmt();
				}
				break;
			}
			this.state = 157;
			this.blockStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInStmt(): ForInStmtContext {
		let _localctx: ForInStmtContext = new ForInStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, zParser.RULE_forInStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(zParser.FOR);
			{
			this.state = 160;
			this.identifier();
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === zParser.COMMA) {
				{
				this.state = 161;
				this.match(zParser.COMMA);
				this.state = 162;
				this.identifier();
				}
			}

			this.state = 165;
			this.match(zParser.IN);
			}
			this.state = 167;
			this.expression();
			this.state = 168;
			this.blockStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, zParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(zParser.RETURN);
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 171;
				this.expression();
				}
				break;
			}
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 174;
				this.match(zParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public branchStmt(): BranchStmtContext {
		let _localctx: BranchStmtContext = new BranchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, zParser.RULE_branchStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			_la = this._input.LA(1);
			if (!(_la === zParser.BREAK || _la === zParser.CONTINUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 178;
				this.identifier();
				}
				break;
			}
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 181;
				this.match(zParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStmt(): ExportStmtContext {
		let _localctx: ExportStmtContext = new ExportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, zParser.RULE_exportStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(zParser.EXPORT);
			this.state = 185;
			this.blockStmt();
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 186;
				this.match(zParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStmt(): EmptyStmtContext {
		let _localctx: EmptyStmtContext = new EmptyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, zParser.RULE_emptyStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(zParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, zParser.RULE_simpleStmt);
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 191;
				this.assignStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 192;
				this.incDecStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 193;
				this.exprStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incDecStmt(): IncDecStmtContext {
		let _localctx: IncDecStmtContext = new IncDecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, zParser.RULE_incDecStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.expression();
			this.state = 197;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === zParser.INC || _la === zParser.DEC)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 198;
				this.match(zParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, zParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.conditionalExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpr(): ConditionalExprContext {
		let _localctx: ConditionalExprContext = new ConditionalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, zParser.RULE_conditionalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.logicalOrExpr();
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === zParser.T__0) {
				{
				this.state = 204;
				this.match(zParser.T__0);
				this.state = 205;
				this.expression();
				this.state = 206;
				this.match(zParser.COLON);
				this.state = 207;
				this.conditionalExpr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpr(): LogicalOrExprContext {
		let _localctx: LogicalOrExprContext = new LogicalOrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, zParser.RULE_logicalOrExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.logicalAndExpr();
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === zParser.OR) {
				{
				{
				this.state = 212;
				this.match(zParser.OR);
				this.state = 213;
				this.logicalAndExpr();
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpr(): LogicalAndExprContext {
		let _localctx: LogicalAndExprContext = new LogicalAndExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, zParser.RULE_logicalAndExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.equalityExpr();
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === zParser.AND) {
				{
				{
				this.state = 220;
				this.match(zParser.AND);
				this.state = 221;
				this.equalityExpr();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpr(): EqualityExprContext {
		let _localctx: EqualityExprContext = new EqualityExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, zParser.RULE_equalityExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.relationalExpr();
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === zParser.EQUAL || _la === zParser.NOT_EQUAL) {
				{
				{
				this.state = 228;
				_la = this._input.LA(1);
				if (!(_la === zParser.EQUAL || _la === zParser.NOT_EQUAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 229;
				this.relationalExpr();
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpr(): RelationalExprContext {
		let _localctx: RelationalExprContext = new RelationalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, zParser.RULE_relationalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.addExpr();
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (zParser.LTE - 48)) | (1 << (zParser.GTE - 48)) | (1 << (zParser.GT - 48)) | (1 << (zParser.LT - 48)))) !== 0)) {
				{
				{
				this.state = 236;
				_la = this._input.LA(1);
				if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (zParser.LTE - 48)) | (1 << (zParser.GTE - 48)) | (1 << (zParser.GT - 48)) | (1 << (zParser.LT - 48)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 237;
				this.addExpr();
				}
				}
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addExpr(): AddExprContext {
		let _localctx: AddExprContext = new AddExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, zParser.RULE_addExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.mulExpr();
			this.state = 248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 244;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__1) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 245;
					this.mulExpr();
					}
					}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mulExpr(): MulExprContext {
		let _localctx: MulExprContext = new MulExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, zParser.RULE_mulExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.unaryExpr();
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.STAR) | (1 << zParser.SLASH) | (1 << zParser.PERCENT))) !== 0)) {
				{
				{
				this.state = 252;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.STAR) | (1 << zParser.SLASH) | (1 << zParser.PERCENT))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 253;
				this.unaryExpr();
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpr(): UnaryExprContext {
		let _localctx: UnaryExprContext = new UnaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, zParser.RULE_unaryExpr);
		let _la: number;
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case zParser.T__2:
			case zParser.PLUS:
			case zParser.MINUS:
			case zParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 259;
				_la = this._input.LA(1);
				if (!(((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (zParser.T__2 - 3)) | (1 << (zParser.PLUS - 3)) | (1 << (zParser.MINUS - 3)) | (1 << (zParser.NOT - 3)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 260;
				this.unaryExpr();
				}
				break;
			case zParser.IDENTIFIER:
			case zParser.INTEGER:
			case zParser.FLOAT:
			case zParser.CHAR:
			case zParser.STRING:
			case zParser.RAW_STRING:
			case zParser.TRUE:
			case zParser.FALSE:
			case zParser.UNDEFINED:
			case zParser.FUNC:
			case zParser.IMPORT:
			case zParser.ERROR:
			case zParser.IMMUTABLE:
			case zParser.LBRACE:
			case zParser.LBRACK:
			case zParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.primaryExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpr(): PrimaryExprContext {
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, zParser.RULE_primaryExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.selectorExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectorExpr(): SelectorExprContext {
		let _localctx: SelectorExprContext = new SelectorExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, zParser.RULE_selectorExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.indexExpr();
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === zParser.DOT) {
				{
				{
				this.state = 267;
				this.match(zParser.DOT);
				this.state = 268;
				this.identifier();
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexExpr(): IndexExprContext {
		let _localctx: IndexExprContext = new IndexExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, zParser.RULE_indexExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.sliceExpr();
			this.state = 282;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 275;
					this.match(zParser.LBRACK);
					this.state = 277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__2) | (1 << zParser.IDENTIFIER) | (1 << zParser.INTEGER) | (1 << zParser.FLOAT) | (1 << zParser.CHAR) | (1 << zParser.STRING) | (1 << zParser.RAW_STRING) | (1 << zParser.TRUE) | (1 << zParser.FALSE) | (1 << zParser.UNDEFINED) | (1 << zParser.FUNC) | (1 << zParser.IMPORT) | (1 << zParser.ERROR) | (1 << zParser.IMMUTABLE) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (zParser.NOT - 32)) | (1 << (zParser.LBRACE - 32)) | (1 << (zParser.LBRACK - 32)) | (1 << (zParser.LPAREN - 32)))) !== 0)) {
						{
						this.state = 276;
						this.expression();
						}
					}

					this.state = 279;
					this.match(zParser.RBRACK);
					}
					}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceExpr(): SliceExprContext {
		let _localctx: SliceExprContext = new SliceExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, zParser.RULE_sliceExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.callExpr();
			this.state = 297;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 286;
					this.match(zParser.LBRACK);
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__2) | (1 << zParser.IDENTIFIER) | (1 << zParser.INTEGER) | (1 << zParser.FLOAT) | (1 << zParser.CHAR) | (1 << zParser.STRING) | (1 << zParser.RAW_STRING) | (1 << zParser.TRUE) | (1 << zParser.FALSE) | (1 << zParser.UNDEFINED) | (1 << zParser.FUNC) | (1 << zParser.IMPORT) | (1 << zParser.ERROR) | (1 << zParser.IMMUTABLE) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (zParser.NOT - 32)) | (1 << (zParser.LBRACE - 32)) | (1 << (zParser.LBRACK - 32)) | (1 << (zParser.LPAREN - 32)))) !== 0)) {
						{
						this.state = 287;
						this.expression();
						}
					}

					this.state = 290;
					this.match(zParser.COLON);
					this.state = 292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__2) | (1 << zParser.IDENTIFIER) | (1 << zParser.INTEGER) | (1 << zParser.FLOAT) | (1 << zParser.CHAR) | (1 << zParser.STRING) | (1 << zParser.RAW_STRING) | (1 << zParser.TRUE) | (1 << zParser.FALSE) | (1 << zParser.UNDEFINED) | (1 << zParser.FUNC) | (1 << zParser.IMPORT) | (1 << zParser.ERROR) | (1 << zParser.IMMUTABLE) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (zParser.NOT - 32)) | (1 << (zParser.LBRACE - 32)) | (1 << (zParser.LBRACK - 32)) | (1 << (zParser.LPAREN - 32)))) !== 0)) {
						{
						this.state = 291;
						this.expression();
						}
					}

					this.state = 294;
					this.match(zParser.RBRACK);
					}
					}
				}
				this.state = 299;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callExpr(): CallExprContext {
		let _localctx: CallExprContext = new CallExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, zParser.RULE_callExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.operand();
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 301;
				this.match(zParser.LPAREN);
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__2) | (1 << zParser.IDENTIFIER) | (1 << zParser.INTEGER) | (1 << zParser.FLOAT) | (1 << zParser.CHAR) | (1 << zParser.STRING) | (1 << zParser.RAW_STRING) | (1 << zParser.TRUE) | (1 << zParser.FALSE) | (1 << zParser.UNDEFINED) | (1 << zParser.FUNC) | (1 << zParser.IMPORT) | (1 << zParser.ERROR) | (1 << zParser.IMMUTABLE) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (zParser.NOT - 32)) | (1 << (zParser.LBRACE - 32)) | (1 << (zParser.LBRACK - 32)) | (1 << (zParser.LPAREN - 32)) | (1 << (zParser.ELLIPSIS - 32)))) !== 0)) {
					{
					this.state = 302;
					this.argumentList();
					}
				}

				this.state = 305;
				this.match(zParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, zParser.RULE_argumentList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case zParser.T__2:
			case zParser.IDENTIFIER:
			case zParser.INTEGER:
			case zParser.FLOAT:
			case zParser.CHAR:
			case zParser.STRING:
			case zParser.RAW_STRING:
			case zParser.TRUE:
			case zParser.FALSE:
			case zParser.UNDEFINED:
			case zParser.FUNC:
			case zParser.IMPORT:
			case zParser.ERROR:
			case zParser.IMMUTABLE:
			case zParser.PLUS:
			case zParser.MINUS:
			case zParser.NOT:
			case zParser.LBRACE:
			case zParser.LBRACK:
			case zParser.LPAREN:
				{
				this.state = 308;
				this.expression();
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 309;
						this.match(zParser.COMMA);
						this.state = 310;
						this.expression();
						}
						}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === zParser.COMMA) {
					{
					this.state = 316;
					this.match(zParser.COMMA);
					this.state = 317;
					this.match(zParser.ELLIPSIS);
					}
				}

				}
				break;
			case zParser.ELLIPSIS:
				{
				this.state = 320;
				this.match(zParser.ELLIPSIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, zParser.RULE_operand);
		try {
			this.state = 333;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case zParser.INTEGER:
			case zParser.FLOAT:
			case zParser.CHAR:
			case zParser.STRING:
			case zParser.RAW_STRING:
			case zParser.TRUE:
			case zParser.FALSE:
			case zParser.UNDEFINED:
			case zParser.LBRACE:
			case zParser.LBRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.literal();
				}
				break;
			case zParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 324;
				this.identifier();
				}
				break;
			case zParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 325;
				this.match(zParser.LPAREN);
				this.state = 326;
				this.expression();
				this.state = 327;
				this.match(zParser.RPAREN);
				}
				break;
			case zParser.FUNC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 329;
				this.funcLit();
				}
				break;
			case zParser.IMPORT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 330;
				this.importExpr();
				}
				break;
			case zParser.ERROR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 331;
				this.errorExpr();
				}
				break;
			case zParser.IMMUTABLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 332;
				this.immutableExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, zParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.expression();
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === zParser.COMMA) {
				{
				{
				this.state = 336;
				this.match(zParser.COMMA);
				this.state = 337;
				this.expression();
				}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, zParser.RULE_literal);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case zParser.INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.intLit();
				}
				break;
			case zParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.floatLit();
				}
				break;
			case zParser.CHAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 345;
				this.charLit();
				}
				break;
			case zParser.STRING:
			case zParser.RAW_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 346;
				this.stringLit();
				}
				break;
			case zParser.TRUE:
			case zParser.FALSE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 347;
				this.boolLit();
				}
				break;
			case zParser.UNDEFINED:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 348;
				this.undefinedLit();
				}
				break;
			case zParser.LBRACK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 349;
				this.arrayLit();
				}
				break;
			case zParser.LBRACE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 350;
				this.mapLit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intLit(): IntLitContext {
		let _localctx: IntLitContext = new IntLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, zParser.RULE_intLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(zParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatLit(): FloatLitContext {
		let _localctx: FloatLitContext = new FloatLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, zParser.RULE_floatLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(zParser.FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charLit(): CharLitContext {
		let _localctx: CharLitContext = new CharLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, zParser.RULE_charLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(zParser.CHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLit(): StringLitContext {
		let _localctx: StringLitContext = new StringLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, zParser.RULE_stringLit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			_la = this._input.LA(1);
			if (!(_la === zParser.STRING || _la === zParser.RAW_STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolLit(): BoolLitContext {
		let _localctx: BoolLitContext = new BoolLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, zParser.RULE_boolLit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			_la = this._input.LA(1);
			if (!(_la === zParser.TRUE || _la === zParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public undefinedLit(): UndefinedLitContext {
		let _localctx: UndefinedLitContext = new UndefinedLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, zParser.RULE_undefinedLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(zParser.UNDEFINED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLit(): ArrayLitContext {
		let _localctx: ArrayLitContext = new ArrayLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, zParser.RULE_arrayLit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(zParser.LBRACK);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << zParser.T__2) | (1 << zParser.IDENTIFIER) | (1 << zParser.INTEGER) | (1 << zParser.FLOAT) | (1 << zParser.CHAR) | (1 << zParser.STRING) | (1 << zParser.RAW_STRING) | (1 << zParser.TRUE) | (1 << zParser.FALSE) | (1 << zParser.UNDEFINED) | (1 << zParser.FUNC) | (1 << zParser.IMPORT) | (1 << zParser.ERROR) | (1 << zParser.IMMUTABLE) | (1 << zParser.PLUS) | (1 << zParser.MINUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (zParser.NOT - 32)) | (1 << (zParser.LBRACE - 32)) | (1 << (zParser.LBRACK - 32)) | (1 << (zParser.LPAREN - 32)))) !== 0)) {
				{
				this.state = 366;
				this.expression();
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 367;
						this.match(zParser.COMMA);
						this.state = 368;
						this.expression();
						}
						}
					}
					this.state = 373;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === zParser.COMMA) {
					{
					this.state = 374;
					this.match(zParser.COMMA);
					}
				}

				}
			}

			this.state = 379;
			this.match(zParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapLit(): MapLitContext {
		let _localctx: MapLitContext = new MapLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, zParser.RULE_mapLit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(zParser.LBRACE);
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === zParser.IDENTIFIER || _la === zParser.STRING) {
				{
				this.state = 382;
				this.mapElement();
				this.state = 387;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 383;
						this.match(zParser.COMMA);
						this.state = 384;
						this.mapElement();
						}
						}
					}
					this.state = 389;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === zParser.COMMA) {
					{
					this.state = 390;
					this.match(zParser.COMMA);
					}
				}

				}
			}

			this.state = 395;
			this.match(zParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapElement(): MapElementContext {
		let _localctx: MapElementContext = new MapElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, zParser.RULE_mapElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case zParser.STRING:
				{
				this.state = 397;
				this.match(zParser.STRING);
				}
				break;
			case zParser.IDENTIFIER:
				{
				this.state = 398;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 401;
			this.match(zParser.COLON);
			this.state = 402;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcLit(): FuncLitContext {
		let _localctx: FuncLitContext = new FuncLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, zParser.RULE_funcLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(zParser.FUNC);
			this.state = 405;
			this.parameters();
			this.state = 406;
			this.blockStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, zParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(zParser.LPAREN);
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === zParser.IDENTIFIER) {
				{
				this.state = 409;
				this.identifier();
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === zParser.COMMA) {
					{
					{
					this.state = 410;
					this.match(zParser.COMMA);
					this.state = 411;
					this.identifier();
					}
					}
					this.state = 416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 419;
			this.match(zParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importExpr(): ImportExprContext {
		let _localctx: ImportExprContext = new ImportExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, zParser.RULE_importExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(zParser.IMPORT);
			this.state = 422;
			this.match(zParser.LPAREN);
			this.state = 423;
			this.match(zParser.STRING);
			this.state = 424;
			this.match(zParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorExpr(): ErrorExprContext {
		let _localctx: ErrorExprContext = new ErrorExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, zParser.RULE_errorExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(zParser.ERROR);
			this.state = 427;
			this.match(zParser.LPAREN);
			this.state = 428;
			this.expression();
			this.state = 429;
			this.match(zParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public immutableExpr(): ImmutableExprContext {
		let _localctx: ImmutableExprContext = new ImmutableExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, zParser.RULE_immutableExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(zParser.IMMUTABLE);
			this.state = 432;
			this.match(zParser.LPAREN);
			this.state = 433;
			this.expression();
			this.state = 434;
			this.match(zParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, zParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(zParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u01B9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x07\x03g\n\x03\f\x03\x0E\x03j\v\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04w" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05}\n\x05\x03\x06\x03\x06" +
		"\x05\x06\x81\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\x8B\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\x91\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\x97\n\t\x03\t\x05\t\x9A\n\t\x03\t\x03\t\x05\t\x9E\n\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\xA6\n\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\v\x03\v\x05\v\xAF\n\v\x03\v\x05\v\xB2\n\v\x03\f\x03\f\x05\f" +
		"\xB6\n\f\x03\f\x05\f\xB9\n\f\x03\r\x03\r\x03\r\x05\r\xBE\n\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC5\n\x0F\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\xCA\n\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\xD4\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\xD9\n\x13" +
		"\f\x13\x0E\x13\xDC\v\x13\x03\x14\x03\x14\x03\x14\x07\x14\xE1\n\x14\f\x14" +
		"\x0E\x14\xE4\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\xE9\n\x15\f\x15\x0E" +
		"\x15\xEC\v\x15\x03\x16\x03\x16\x03\x16\x07\x16\xF1\n\x16\f\x16\x0E\x16" +
		"\xF4\v\x16\x03\x17\x03\x17\x03\x17\x07\x17\xF9\n\x17\f\x17\x0E\x17\xFC" +
		"\v\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0101\n\x18\f\x18\x0E\x18\u0104" +
		"\v\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0109\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x07\x1B\u0110\n\x1B\f\x1B\x0E\x1B\u0113\v\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0118\n\x1C\x03\x1C\x07\x1C\u011B\n\x1C\f" +
		"\x1C\x0E\x1C\u011E\v\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0123\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0127\n\x1D\x03\x1D\x07\x1D\u012A\n\x1D\f\x1D\x0E" +
		"\x1D\u012D\v\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0132\n\x1E\x03\x1E\x05" +
		"\x1E\u0135\n\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u013A\n\x1F\f\x1F\x0E" +
		"\x1F\u013D\v\x1F\x03\x1F\x03\x1F\x05\x1F\u0141\n\x1F\x03\x1F\x05\x1F\u0144" +
		"\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0150\n" +
		" \x03!\x03!\x03!\x07!\u0155\n!\f!\x0E!\u0158\v!\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0162\n\"\x03#\x03#\x03$\x03$\x03%\x03" +
		"%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03)\x07)\u0174\n)\f" +
		")\x0E)\u0177\v)\x03)\x05)\u017A\n)\x05)\u017C\n)\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x07*\u0184\n*\f*\x0E*\u0187\v*\x03*\x05*\u018A\n*\x05*\u018C\n" +
		"*\x03*\x03*\x03+\x03+\x05+\u0192\n+\x03+\x03+\x03+\x03,\x03,\x03,\x03" +
		",\x03-\x03-\x03-\x03-\x07-\u019F\n-\f-\x0E-\u01A2\v-\x05-\u01A4\n-\x03" +
		"-\x03-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x030\x030\x03" +
		"0\x030\x030\x031\x031\x031\x02\x02\x022\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02\x02\f\x04\x02!!6=\x03\x02\x15" +
		"\x16\x03\x02-.\x03\x0201\x04\x0223>?\x04\x02\x04\x04\x1C\x1D\x03\x02\x1E" +
		" \x05\x02\x05\x05\x1C\x1D\"\"\x03\x02\v\f\x03\x02\r\x0E\x02\u01CD\x02" +
		"b\x03\x02\x02\x02\x04h\x03\x02\x02\x02\x06v\x03\x02\x02\x02\bx\x03\x02" +
		"\x02\x02\n~\x03\x02\x02\x02\f\x82\x03\x02\x02\x02\x0E\x86\x03\x02\x02" +
		"\x02\x10\x92\x03\x02\x02\x02\x12\xA1\x03\x02\x02\x02\x14\xAC\x03\x02\x02" +
		"\x02\x16\xB3\x03\x02\x02\x02\x18\xBA\x03\x02\x02\x02\x1A\xBF\x03\x02\x02" +
		"\x02\x1C\xC4\x03\x02\x02\x02\x1E\xC6\x03\x02\x02\x02 \xCB\x03\x02\x02" +
		"\x02\"\xCD\x03\x02\x02\x02$\xD5\x03\x02\x02\x02&\xDD\x03\x02\x02\x02(" +
		"\xE5\x03\x02\x02\x02*\xED\x03\x02\x02\x02,\xF5\x03\x02\x02\x02.\xFD\x03" +
		"\x02\x02\x020\u0108\x03\x02\x02\x022\u010A\x03\x02\x02\x024\u010C\x03" +
		"\x02\x02\x026\u0114\x03\x02\x02\x028\u011F\x03\x02\x02\x02:\u012E\x03" +
		"\x02\x02\x02<\u0143\x03\x02\x02\x02>\u014F\x03\x02\x02\x02@\u0151\x03" +
		"\x02\x02\x02B\u0161\x03\x02\x02\x02D\u0163\x03\x02\x02\x02F\u0165\x03" +
		"\x02\x02\x02H\u0167\x03\x02\x02\x02J\u0169\x03\x02\x02\x02L\u016B\x03" +
		"\x02\x02\x02N\u016D\x03\x02\x02\x02P\u016F\x03\x02\x02\x02R\u017F\x03" +
		"\x02\x02\x02T\u0191\x03\x02\x02\x02V\u0196\x03\x02\x02\x02X\u019A\x03" +
		"\x02\x02\x02Z\u01A7\x03\x02\x02\x02\\\u01AC\x03\x02\x02\x02^\u01B1\x03" +
		"\x02\x02\x02`\u01B6\x03\x02\x02\x02bc\x05\x04\x03\x02cd\x07\x02\x02\x03" +
		"d\x03\x03\x02\x02\x02eg\x05\x06\x04\x02fe\x03\x02\x02\x02gj\x03\x02\x02" +
		"\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i\x05\x03\x02\x02\x02jh\x03\x02" +
		"\x02\x02kw\x05\b\x05\x02lw\x05\n\x06\x02mw\x05\f\x07\x02nw\x05\x0E\b\x02" +
		"ow\x05\x10\t\x02pw\x05\x12\n\x02qw\x05\x14\v\x02rw\x05\x16\f\x02sw\x05" +
		"\x18\r\x02tw\x05\x1E\x10\x02uw\x05\x1A\x0E\x02vk\x03\x02\x02\x02vl\x03" +
		"\x02\x02\x02vm\x03\x02\x02\x02vn\x03\x02\x02\x02vo\x03\x02\x02\x02vp\x03" +
		"\x02\x02\x02vq\x03\x02\x02\x02vr\x03\x02\x02\x02vs\x03\x02\x02\x02vt\x03" +
		"\x02\x02\x02vu\x03\x02\x02\x02w\x07\x03\x02\x02\x02xy\x05@!\x02yz\t\x02" +
		"\x02\x02z|\x05@!\x02{}\x07,\x02\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}\t\x03\x02\x02\x02~\x80\x05 \x11\x02\x7F\x81\x07,\x02\x02\x80\x7F\x03" +
		"\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\v\x03\x02\x02\x02\x82\x83\x07" +
		"#\x02\x02\x83\x84\x05\x04\x03\x02\x84\x85\x07$\x02\x02\x85\r\x03\x02\x02" +
		"\x02\x86\x8A\x07\x10\x02\x02\x87\x88\x05\x1C\x0F\x02\x88\x89\x07,\x02" +
		"\x02\x89\x8B\x03\x02\x02\x02\x8A\x87\x03\x02\x02\x02\x8A\x8B\x03\x02\x02" +
		"\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x05 \x11\x02\x8D\x90\x05\f\x07\x02" +
		"\x8E\x8F\x07\x11\x02\x02\x8F\x91\x05\x06\x04\x02\x90\x8E\x03\x02\x02\x02" +
		"\x90\x91\x03\x02\x02\x02\x91\x0F\x03\x02\x02\x02\x92\x96\x07\x12\x02\x02" +
		"\x93\x94\x05\x1C\x0F\x02\x94\x95\x07,\x02\x02\x95\x97\x03\x02\x02\x02" +
		"\x96\x93\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02" +
		"\x98\x9A\x05 \x11\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02" +
		"\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x07,\x02\x02\x9C\x9E\x05\x1C\x0F\x02" +
		"\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02" +
		"\x9F\xA0\x05\f\x07\x02\xA0\x11\x03\x02\x02\x02\xA1\xA2\x07\x12\x02\x02" +
		"\xA2\xA5\x05`1\x02\xA3\xA4\x07)\x02\x02\xA4\xA6\x05`1\x02\xA5\xA3\x03" +
		"\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x07" +
		"\x13\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x05 \x11\x02\xAA\xAB\x05" +
		"\f\x07\x02\xAB\x13\x03\x02\x02\x02\xAC\xAE\x07\x14\x02\x02\xAD\xAF\x05" +
		" \x11\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x03" +
		"\x02\x02\x02\xB0\xB2\x07,\x02\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03" +
		"\x02\x02\x02\xB2\x15\x03\x02\x02\x02\xB3\xB5\t\x03\x02\x02\xB4\xB6\x05" +
		"`1\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02" +
		"\x02\x02\xB7\xB9\x07,\x02\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02" +
		"\x02\x02\xB9\x17\x03\x02\x02\x02\xBA\xBB\x07\x17\x02\x02\xBB\xBD\x05\f" +
		"\x07\x02\xBC\xBE\x07,\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02" +
		"\x02\x02\xBE\x19\x03\x02\x02\x02\xBF\xC0\x07,\x02\x02\xC0\x1B\x03\x02" +
		"\x02\x02\xC1\xC5\x05\b\x05\x02\xC2\xC5\x05\x1E\x10\x02\xC3\xC5\x05\n\x06" +
		"\x02\xC4\xC1\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC3\x03\x02\x02" +
		"\x02\xC5\x1D\x03\x02\x02\x02\xC6\xC7\x05 \x11\x02\xC7\xC9\t\x04\x02\x02" +
		"\xC8\xCA\x07,\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02" +
		"\xCA\x1F\x03\x02\x02\x02\xCB\xCC\x05\"\x12\x02\xCC!\x03\x02\x02\x02\xCD" +
		"\xD3\x05$\x13\x02\xCE\xCF\x07\x03\x02\x02\xCF\xD0\x05 \x11\x02\xD0\xD1" +
		"\x07+\x02\x02\xD1\xD2\x05\"\x12\x02\xD2\xD4\x03\x02\x02\x02\xD3\xCE\x03" +
		"\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4#\x03\x02\x02\x02\xD5\xDA\x05" +
		"&\x14\x02\xD6\xD7\x075\x02\x02\xD7\xD9\x05&\x14\x02\xD8\xD6\x03\x02\x02" +
		"\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02" +
		"\x02\xDB%\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE2\x05(\x15\x02" +
		"\xDE\xDF\x074\x02\x02\xDF\xE1\x05(\x15\x02\xE0\xDE\x03\x02\x02\x02\xE1" +
		"\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3" +
		"\'\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xEA\x05*\x16\x02\xE6\xE7" +
		"\t\x05\x02\x02\xE7\xE9\x05*\x16\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEC\x03" +
		"\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB)\x03" +
		"\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xF2\x05,\x17\x02\xEE\xEF\t\x06" +
		"\x02\x02\xEF\xF1\x05,\x17\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF4\x03\x02" +
		"\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3+\x03\x02" +
		"\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xFA\x05.\x18\x02\xF6\xF7\t\x07\x02" +
		"\x02\xF7\xF9\x05.\x18\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFC\x03\x02\x02" +
		"\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB-\x03\x02\x02" +
		"\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0102\x050\x19\x02\xFE\xFF\t\b\x02\x02" +
		"\xFF\u0101\x050\x19\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0104\x03\x02" +
		"\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
		"/\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\u0106\t\t\x02\x02" +
		"\u0106\u0109\x050\x19\x02\u0107\u0109\x052\x1A\x02\u0108\u0105\x03\x02" +
		"\x02\x02\u0108\u0107\x03\x02\x02\x02\u01091\x03\x02\x02\x02\u010A\u010B" +
		"\x054\x1B\x02\u010B3\x03\x02\x02\x02\u010C\u0111\x056\x1C\x02\u010D\u010E" +
		"\x07*\x02\x02\u010E\u0110\x05`1\x02\u010F\u010D\x03\x02\x02\x02\u0110" +
		"\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02" +
		"\x02\x02\u01125\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u011C" +
		"\x058\x1D\x02\u0115\u0117\x07%\x02\x02\u0116\u0118\x05 \x11\x02\u0117" +
		"\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02" +
		"\x02\x02\u0119\u011B\x07&\x02\x02\u011A\u0115\x03\x02\x02\x02\u011B\u011E" +
		"\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02" +
		"\u011D7\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u012B\x05:\x1E" +
		"\x02\u0120\u0122\x07%\x02\x02\u0121\u0123\x05 \x11\x02\u0122\u0121\x03" +
		"\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0126\x07+\x02\x02\u0125\u0127\x05 \x11\x02\u0126\u0125\x03\x02\x02\x02" +
		"\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x07" +
		"&\x02\x02\u0129\u0120\x03\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B" +
		"\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C9\x03\x02\x02" +
		"\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0134\x05> \x02\u012F\u0131\x07" +
		"\'\x02\x02\u0130\u0132\x05<\x1F\x02\u0131\u0130\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0135\x07(\x02" +
		"\x02\u0134\u012F\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135;\x03" +
		"\x02\x02\x02\u0136\u013B\x05 \x11\x02\u0137\u0138\x07)\x02\x02\u0138\u013A" +
		"\x05 \x11\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u0140\x03" +
		"\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u013F\x07)\x02\x02\u013F" +
		"\u0141\x07/\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02" +
		"\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0144\x07/\x02\x02\u0143\u0136" +
		"\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144=\x03\x02\x02\x02\u0145" +
		"\u0150\x05B\"\x02\u0146\u0150\x05`1\x02\u0147\u0148\x07\'\x02\x02\u0148" +
		"\u0149\x05 \x11\x02\u0149\u014A\x07(\x02\x02\u014A\u0150\x03\x02\x02\x02" +
		"\u014B\u0150\x05V,\x02\u014C\u0150\x05Z.\x02\u014D\u0150\x05\\/\x02\u014E" +
		"\u0150\x05^0\x02\u014F\u0145\x03\x02\x02\x02\u014F\u0146\x03\x02\x02\x02" +
		"\u014F\u0147\x03\x02\x02\x02\u014F\u014B\x03\x02\x02\x02\u014F\u014C\x03" +
		"\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150" +
		"?\x03\x02\x02\x02\u0151\u0156\x05 \x11\x02\u0152\u0153\x07)\x02\x02\u0153" +
		"\u0155\x05 \x11\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0158\x03\x02\x02" +
		"\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157A\x03" +
		"\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u0162\x05D#\x02\u015A\u0162" +
		"\x05F$\x02\u015B\u0162\x05H%\x02\u015C\u0162\x05J&\x02\u015D\u0162\x05" +
		"L\'\x02\u015E\u0162\x05N(\x02\u015F\u0162\x05P)\x02\u0160\u0162\x05R*" +
		"\x02\u0161\u0159\x03\x02\x02\x02\u0161\u015A\x03\x02\x02\x02\u0161\u015B" +
		"\x03\x02\x02\x02\u0161\u015C\x03\x02\x02\x02\u0161\u015D\x03\x02\x02\x02" +
		"\u0161\u015E\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0160\x03" +
		"\x02\x02\x02\u0162C\x03\x02\x02\x02\u0163\u0164\x07\b\x02\x02\u0164E\x03" +
		"\x02\x02\x02\u0165\u0166\x07\t\x02\x02\u0166G\x03\x02\x02\x02\u0167\u0168" +
		"\x07\n\x02\x02\u0168I\x03\x02\x02\x02\u0169\u016A\t\n\x02\x02\u016AK\x03" +
		"\x02\x02\x02\u016B\u016C\t\v\x02\x02\u016CM\x03\x02\x02\x02\u016D\u016E" +
		"\x07\x0F\x02\x02\u016EO\x03\x02\x02\x02\u016F\u017B\x07%\x02\x02\u0170" +
		"\u0175\x05 \x11\x02\u0171\u0172\x07)\x02\x02\u0172\u0174\x05 \x11\x02" +
		"\u0173\u0171\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03" +
		"\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177" +
		"\u0175\x03\x02\x02\x02\u0178\u017A\x07)\x02\x02\u0179\u0178\x03\x02\x02" +
		"\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0170" +
		"\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
		"\u017D\u017E\x07&\x02\x02\u017EQ\x03\x02\x02\x02\u017F\u018B\x07#\x02" +
		"\x02\u0180\u0185\x05T+\x02\u0181\u0182\x07)\x02\x02\u0182\u0184\x05T+" +
		"\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183" +
		"\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02" +
		"\u0187\u0185\x03\x02\x02\x02\u0188\u018A\x07)\x02\x02\u0189\u0188\x03" +
		"\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B" +
		"\u0180\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D\u018E\x07$\x02\x02\u018ES\x03\x02\x02\x02\u018F\u0192\x07" +
		"\v\x02\x02\u0190\u0192\x05`1\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190" +
		"\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194\x07+\x02\x02" +
		"\u0194\u0195\x05 \x11\x02\u0195U\x03\x02\x02\x02\u0196\u0197\x07\x18\x02" +
		"\x02\u0197\u0198\x05X-\x02\u0198\u0199\x05\f\x07\x02\u0199W\x03\x02\x02" +
		"\x02\u019A\u01A3\x07\'\x02\x02\u019B\u01A0\x05`1\x02\u019C\u019D\x07)" +
		"\x02\x02\u019D\u019F\x05`1\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A2" +
		"\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
		"\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u019B\x03" +
		"\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A6\x07(\x02\x02\u01A6Y\x03\x02\x02\x02\u01A7\u01A8\x07\x19\x02\x02" +
		"\u01A8\u01A9\x07\'\x02\x02\u01A9\u01AA\x07\v\x02\x02\u01AA\u01AB\x07(" +
		"\x02\x02\u01AB[\x03\x02\x02\x02\u01AC\u01AD\x07\x1A\x02\x02\u01AD\u01AE" +
		"\x07\'\x02\x02\u01AE\u01AF\x05 \x11\x02\u01AF\u01B0\x07(\x02\x02\u01B0" +
		"]\x03\x02\x02\x02\u01B1\u01B2\x07\x1B\x02\x02\u01B2\u01B3\x07\'\x02\x02" +
		"\u01B3\u01B4\x05 \x11\x02\u01B4\u01B5\x07(\x02\x02\u01B5_\x03\x02\x02" +
		"\x02\u01B6\u01B7\x07\x06\x02\x02\u01B7a\x03\x02\x02\x022hv|\x80\x8A\x90" +
		"\x96\x99\x9D\xA5\xAE\xB1\xB5\xB8\xBD\xC4\xC9\xD3\xDA\xE2\xEA\xF2\xFA\u0102" +
		"\u0108\u0111\u0117\u011C\u0122\u0126\u012B\u0131\u0134\u013B\u0140\u0143" +
		"\u014F\u0156\u0161\u0175\u0179\u017B\u0185\u0189\u018B\u0191\u01A0\u01A3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!zParser.__ATN) {
			zParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(zParser._serializedATN));
		}

		return zParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	public EOF(): TerminalNode { return this.getToken(zParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_program; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class StmtListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_stmtList; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterStmtList) {
			listener.enterStmtList(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitStmtList) {
			listener.exitStmtList(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignStmt(): AssignStmtContext | undefined {
		return this.tryGetRuleContext(0, AssignStmtContext);
	}
	public exprStmt(): ExprStmtContext | undefined {
		return this.tryGetRuleContext(0, ExprStmtContext);
	}
	public blockStmt(): BlockStmtContext | undefined {
		return this.tryGetRuleContext(0, BlockStmtContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public forInStmt(): ForInStmtContext | undefined {
		return this.tryGetRuleContext(0, ForInStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public branchStmt(): BranchStmtContext | undefined {
		return this.tryGetRuleContext(0, BranchStmtContext);
	}
	public exportStmt(): ExportStmtContext | undefined {
		return this.tryGetRuleContext(0, ExportStmtContext);
	}
	public incDecStmt(): IncDecStmtContext | undefined {
		return this.tryGetRuleContext(0, IncDecStmtContext);
	}
	public emptyStmt(): EmptyStmtContext | undefined {
		return this.tryGetRuleContext(0, EmptyStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_statement; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AssignStmtContext extends ParserRuleContext {
	public _op!: Token;
	public exprList(): ExprListContext[];
	public exprList(i: number): ExprListContext;
	public exprList(i?: number): ExprListContext | ExprListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprListContext);
		} else {
			return this.getRuleContext(i, ExprListContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(zParser.EQ, 0); }
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(zParser.DEFINE, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(zParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(zParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(zParser.MUL_ASSIGN, 0); }
	public QUO_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(zParser.QUO_ASSIGN, 0); }
	public REM_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(zParser.REM_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(zParser.OR_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(zParser.AND_ASSIGN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(zParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_assignStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterAssignStmt) {
			listener.enterAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitAssignStmt) {
			listener.exitAssignStmt(this);
		}
	}
}


export class ExprStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(zParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_exprStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterExprStmt) {
			listener.enterExprStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitExprStmt) {
			listener.exitExprStmt(this);
		}
	}
}


export class BlockStmtContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(zParser.LBRACE, 0); }
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(zParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_blockStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterBlockStmt) {
			listener.enterBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitBlockStmt) {
			listener.exitBlockStmt(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(zParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public blockStmt(): BlockStmtContext {
		return this.getRuleContext(0, BlockStmtContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(zParser.SEMI, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(zParser.ELSE, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(zParser.FOR, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.SEMI);
		} else {
			return this.getToken(zParser.SEMI, i);
		}
	}
	public blockStmt(): BlockStmtContext {
		return this.getRuleContext(0, BlockStmtContext);
	}
	public simpleStmt(): SimpleStmtContext[];
	public simpleStmt(i: number): SimpleStmtContext;
	public simpleStmt(i?: number): SimpleStmtContext | SimpleStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleStmtContext);
		} else {
			return this.getRuleContext(i, SimpleStmtContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
}


export class ForInStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(zParser.FOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public blockStmt(): BlockStmtContext {
		return this.getRuleContext(0, BlockStmtContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(zParser.IN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(zParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_forInStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterForInStmt) {
			listener.enterForInStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitForInStmt) {
			listener.exitForInStmt(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(zParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(zParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
}


export class BranchStmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(zParser.BREAK, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(zParser.CONTINUE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(zParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_branchStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterBranchStmt) {
			listener.enterBranchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitBranchStmt) {
			listener.exitBranchStmt(this);
		}
	}
}


export class ExportStmtContext extends ParserRuleContext {
	public EXPORT(): TerminalNode { return this.getToken(zParser.EXPORT, 0); }
	public blockStmt(): BlockStmtContext {
		return this.getRuleContext(0, BlockStmtContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(zParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_exportStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterExportStmt) {
			listener.enterExportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitExportStmt) {
			listener.exitExportStmt(this);
		}
	}
}


export class EmptyStmtContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(zParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_emptyStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterEmptyStmt) {
			listener.enterEmptyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitEmptyStmt) {
			listener.exitEmptyStmt(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	public assignStmt(): AssignStmtContext | undefined {
		return this.tryGetRuleContext(0, AssignStmtContext);
	}
	public incDecStmt(): IncDecStmtContext | undefined {
		return this.tryGetRuleContext(0, IncDecStmtContext);
	}
	public exprStmt(): ExprStmtContext | undefined {
		return this.tryGetRuleContext(0, ExprStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_simpleStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterSimpleStmt) {
			listener.enterSimpleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitSimpleStmt) {
			listener.exitSimpleStmt(this);
		}
	}
}


export class IncDecStmtContext extends ParserRuleContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(zParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(zParser.DEC, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(zParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_incDecStmt; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterIncDecStmt) {
			listener.enterIncDecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitIncDecStmt) {
			listener.exitIncDecStmt(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public conditionalExpr(): ConditionalExprContext {
		return this.getRuleContext(0, ConditionalExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_expression; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ConditionalExprContext extends ParserRuleContext {
	public logicalOrExpr(): LogicalOrExprContext {
		return this.getRuleContext(0, LogicalOrExprContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(zParser.COLON, 0); }
	public conditionalExpr(): ConditionalExprContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_conditionalExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterConditionalExpr) {
			listener.enterConditionalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitConditionalExpr) {
			listener.exitConditionalExpr(this);
		}
	}
}


export class LogicalOrExprContext extends ParserRuleContext {
	public logicalAndExpr(): LogicalAndExprContext[];
	public logicalAndExpr(i: number): LogicalAndExprContext;
	public logicalAndExpr(i?: number): LogicalAndExprContext | LogicalAndExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExprContext);
		} else {
			return this.getRuleContext(i, LogicalAndExprContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.OR);
		} else {
			return this.getToken(zParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_logicalOrExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterLogicalOrExpr) {
			listener.enterLogicalOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitLogicalOrExpr) {
			listener.exitLogicalOrExpr(this);
		}
	}
}


export class LogicalAndExprContext extends ParserRuleContext {
	public equalityExpr(): EqualityExprContext[];
	public equalityExpr(i: number): EqualityExprContext;
	public equalityExpr(i?: number): EqualityExprContext | EqualityExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExprContext);
		} else {
			return this.getRuleContext(i, EqualityExprContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.AND);
		} else {
			return this.getToken(zParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_logicalAndExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterLogicalAndExpr) {
			listener.enterLogicalAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitLogicalAndExpr) {
			listener.exitLogicalAndExpr(this);
		}
	}
}


export class EqualityExprContext extends ParserRuleContext {
	public relationalExpr(): RelationalExprContext[];
	public relationalExpr(i: number): RelationalExprContext;
	public relationalExpr(i?: number): RelationalExprContext | RelationalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExprContext);
		} else {
			return this.getRuleContext(i, RelationalExprContext);
		}
	}
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.EQUAL);
		} else {
			return this.getToken(zParser.EQUAL, i);
		}
	}
	public NOT_EQUAL(): TerminalNode[];
	public NOT_EQUAL(i: number): TerminalNode;
	public NOT_EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.NOT_EQUAL);
		} else {
			return this.getToken(zParser.NOT_EQUAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_equalityExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterEqualityExpr) {
			listener.enterEqualityExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitEqualityExpr) {
			listener.exitEqualityExpr(this);
		}
	}
}


export class RelationalExprContext extends ParserRuleContext {
	public addExpr(): AddExprContext[];
	public addExpr(i: number): AddExprContext;
	public addExpr(i?: number): AddExprContext | AddExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddExprContext);
		} else {
			return this.getRuleContext(i, AddExprContext);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.LT);
		} else {
			return this.getToken(zParser.LT, i);
		}
	}
	public LTE(): TerminalNode[];
	public LTE(i: number): TerminalNode;
	public LTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.LTE);
		} else {
			return this.getToken(zParser.LTE, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.GT);
		} else {
			return this.getToken(zParser.GT, i);
		}
	}
	public GTE(): TerminalNode[];
	public GTE(i: number): TerminalNode;
	public GTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.GTE);
		} else {
			return this.getToken(zParser.GTE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_relationalExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterRelationalExpr) {
			listener.enterRelationalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitRelationalExpr) {
			listener.exitRelationalExpr(this);
		}
	}
}


export class AddExprContext extends ParserRuleContext {
	public mulExpr(): MulExprContext[];
	public mulExpr(i: number): MulExprContext;
	public mulExpr(i?: number): MulExprContext | MulExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MulExprContext);
		} else {
			return this.getRuleContext(i, MulExprContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.PLUS);
		} else {
			return this.getToken(zParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.MINUS);
		} else {
			return this.getToken(zParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_addExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterAddExpr) {
			listener.enterAddExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitAddExpr) {
			listener.exitAddExpr(this);
		}
	}
}


export class MulExprContext extends ParserRuleContext {
	public unaryExpr(): UnaryExprContext[];
	public unaryExpr(i: number): UnaryExprContext;
	public unaryExpr(i?: number): UnaryExprContext | UnaryExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExprContext);
		} else {
			return this.getRuleContext(i, UnaryExprContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.STAR);
		} else {
			return this.getToken(zParser.STAR, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.SLASH);
		} else {
			return this.getToken(zParser.SLASH, i);
		}
	}
	public PERCENT(): TerminalNode[];
	public PERCENT(i: number): TerminalNode;
	public PERCENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.PERCENT);
		} else {
			return this.getToken(zParser.PERCENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_mulExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterMulExpr) {
			listener.enterMulExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitMulExpr) {
			listener.exitMulExpr(this);
		}
	}
}


export class UnaryExprContext extends ParserRuleContext {
	public unaryExpr(): UnaryExprContext | undefined {
		return this.tryGetRuleContext(0, UnaryExprContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(zParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(zParser.MINUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(zParser.NOT, 0); }
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_unaryExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public selectorExpr(): SelectorExprContext {
		return this.getRuleContext(0, SelectorExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
}


export class SelectorExprContext extends ParserRuleContext {
	public indexExpr(): IndexExprContext {
		return this.getRuleContext(0, IndexExprContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.DOT);
		} else {
			return this.getToken(zParser.DOT, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_selectorExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterSelectorExpr) {
			listener.enterSelectorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitSelectorExpr) {
			listener.exitSelectorExpr(this);
		}
	}
}


export class IndexExprContext extends ParserRuleContext {
	public sliceExpr(): SliceExprContext {
		return this.getRuleContext(0, SliceExprContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.LBRACK);
		} else {
			return this.getToken(zParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.RBRACK);
		} else {
			return this.getToken(zParser.RBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_indexExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterIndexExpr) {
			listener.enterIndexExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitIndexExpr) {
			listener.exitIndexExpr(this);
		}
	}
}


export class SliceExprContext extends ParserRuleContext {
	public callExpr(): CallExprContext {
		return this.getRuleContext(0, CallExprContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.LBRACK);
		} else {
			return this.getToken(zParser.LBRACK, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.COLON);
		} else {
			return this.getToken(zParser.COLON, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.RBRACK);
		} else {
			return this.getToken(zParser.RBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_sliceExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterSliceExpr) {
			listener.enterSliceExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitSliceExpr) {
			listener.exitSliceExpr(this);
		}
	}
}


export class CallExprContext extends ParserRuleContext {
	public operand(): OperandContext {
		return this.getRuleContext(0, OperandContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(zParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(zParser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_callExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterCallExpr) {
			listener.enterCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitCallExpr) {
			listener.exitCallExpr(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(zParser.ELLIPSIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.COMMA);
		} else {
			return this.getToken(zParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(zParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(zParser.RPAREN, 0); }
	public funcLit(): FuncLitContext | undefined {
		return this.tryGetRuleContext(0, FuncLitContext);
	}
	public importExpr(): ImportExprContext | undefined {
		return this.tryGetRuleContext(0, ImportExprContext);
	}
	public errorExpr(): ErrorExprContext | undefined {
		return this.tryGetRuleContext(0, ErrorExprContext);
	}
	public immutableExpr(): ImmutableExprContext | undefined {
		return this.tryGetRuleContext(0, ImmutableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_operand; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.COMMA);
		} else {
			return this.getToken(zParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_exprList; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public intLit(): IntLitContext | undefined {
		return this.tryGetRuleContext(0, IntLitContext);
	}
	public floatLit(): FloatLitContext | undefined {
		return this.tryGetRuleContext(0, FloatLitContext);
	}
	public charLit(): CharLitContext | undefined {
		return this.tryGetRuleContext(0, CharLitContext);
	}
	public stringLit(): StringLitContext | undefined {
		return this.tryGetRuleContext(0, StringLitContext);
	}
	public boolLit(): BoolLitContext | undefined {
		return this.tryGetRuleContext(0, BoolLitContext);
	}
	public undefinedLit(): UndefinedLitContext | undefined {
		return this.tryGetRuleContext(0, UndefinedLitContext);
	}
	public arrayLit(): ArrayLitContext | undefined {
		return this.tryGetRuleContext(0, ArrayLitContext);
	}
	public mapLit(): MapLitContext | undefined {
		return this.tryGetRuleContext(0, MapLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_literal; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class IntLitContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(zParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_intLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterIntLit) {
			listener.enterIntLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitIntLit) {
			listener.exitIntLit(this);
		}
	}
}


export class FloatLitContext extends ParserRuleContext {
	public FLOAT(): TerminalNode { return this.getToken(zParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_floatLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterFloatLit) {
			listener.enterFloatLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitFloatLit) {
			listener.exitFloatLit(this);
		}
	}
}


export class CharLitContext extends ParserRuleContext {
	public CHAR(): TerminalNode { return this.getToken(zParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_charLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterCharLit) {
			listener.enterCharLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitCharLit) {
			listener.exitCharLit(this);
		}
	}
}


export class StringLitContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(zParser.STRING, 0); }
	public RAW_STRING(): TerminalNode | undefined { return this.tryGetToken(zParser.RAW_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_stringLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterStringLit) {
			listener.enterStringLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitStringLit) {
			listener.exitStringLit(this);
		}
	}
}


export class BoolLitContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(zParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(zParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_boolLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterBoolLit) {
			listener.enterBoolLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitBoolLit) {
			listener.exitBoolLit(this);
		}
	}
}


export class UndefinedLitContext extends ParserRuleContext {
	public UNDEFINED(): TerminalNode { return this.getToken(zParser.UNDEFINED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_undefinedLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterUndefinedLit) {
			listener.enterUndefinedLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitUndefinedLit) {
			listener.exitUndefinedLit(this);
		}
	}
}


export class ArrayLitContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(zParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(zParser.RBRACK, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.COMMA);
		} else {
			return this.getToken(zParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_arrayLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterArrayLit) {
			listener.enterArrayLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitArrayLit) {
			listener.exitArrayLit(this);
		}
	}
}


export class MapLitContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(zParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(zParser.RBRACE, 0); }
	public mapElement(): MapElementContext[];
	public mapElement(i: number): MapElementContext;
	public mapElement(i?: number): MapElementContext | MapElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapElementContext);
		} else {
			return this.getRuleContext(i, MapElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.COMMA);
		} else {
			return this.getToken(zParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_mapLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterMapLit) {
			listener.enterMapLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitMapLit) {
			listener.exitMapLit(this);
		}
	}
}


export class MapElementContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(zParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(zParser.STRING, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_mapElement; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterMapElement) {
			listener.enterMapElement(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitMapElement) {
			listener.exitMapElement(this);
		}
	}
}


export class FuncLitContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(zParser.FUNC, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public blockStmt(): BlockStmtContext {
		return this.getRuleContext(0, BlockStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_funcLit; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterFuncLit) {
			listener.enterFuncLit(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitFuncLit) {
			listener.exitFuncLit(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(zParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(zParser.RPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(zParser.COMMA);
		} else {
			return this.getToken(zParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_parameters; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
}


export class ImportExprContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(zParser.IMPORT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(zParser.LPAREN, 0); }
	public STRING(): TerminalNode { return this.getToken(zParser.STRING, 0); }
	public RPAREN(): TerminalNode { return this.getToken(zParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_importExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterImportExpr) {
			listener.enterImportExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitImportExpr) {
			listener.exitImportExpr(this);
		}
	}
}


export class ErrorExprContext extends ParserRuleContext {
	public ERROR(): TerminalNode { return this.getToken(zParser.ERROR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(zParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(zParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_errorExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterErrorExpr) {
			listener.enterErrorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitErrorExpr) {
			listener.exitErrorExpr(this);
		}
	}
}


export class ImmutableExprContext extends ParserRuleContext {
	public IMMUTABLE(): TerminalNode { return this.getToken(zParser.IMMUTABLE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(zParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(zParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_immutableExpr; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterImmutableExpr) {
			listener.enterImmutableExpr(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitImmutableExpr) {
			listener.exitImmutableExpr(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(zParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return zParser.RULE_identifier; }
	// @Override
	public enterRule(listener: zListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: zListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


