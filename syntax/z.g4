grammar z;

// Parser Rules

program: stmtList EOF;

stmtList: statement*;

statement:
	assignStmt
	| exprStmt
	| blockStmt
	| ifStmt
	| forStmt
	| forInStmt
	| returnStmt
	| branchStmt
	| exportStmt
	| incDecStmt
	| emptyStmt;

// Assignment Statement: x = y, a += b, etc.
assignStmt:
	exprList op = (
		'='
		| ':='
		| '+='
		| '-='
		| '*='
		| '/='
		| '%='
		| '||='
		| '&&='
	) exprList ';'?;

// Expression Statement
exprStmt: expression ';'?;

// Block Statement: { stmt1; stmt2; }
blockStmt: '{' stmtList '}';

// If Statement: if cond { ... } else { ... } Optional init statement: if x := 5; cond { ... }
ifStmt:
	'if' (simpleStmt ';')? expression blockStmt (
		'else' statement
	)?;

// For Statement: for init; cond; post { ... } or for cond { ... }
forStmt:
	'for' (simpleStmt ';')? expression? ';' simpleStmt? blockStmt;

// For-In Statement: for k, v in iterable { ... } or for k in iterable { ... }
forInStmt:
	'for' (identifier (',' identifier)? 'in') expression blockStmt;

// Return Statement: return expr?
returnStmt: 'return' expression? ';'?;

// Branch Statements: break, continue, goto label
branchStmt: ('break' | 'continue') identifier? ';'?;

// Export Statement: export expr
exportStmt: 'export' blockStmt ';'?;

// Empty Statement: just semicolon or implicit
emptyStmt: ';';

// Simple statement used in "if" and "for" (e.g., assignment or increment)
simpleStmt: assignStmt | incDecStmt | exprStmt;

// Increment/Decrement: i++, j--
incDecStmt: expression op = ('++' | '--') ';'?;

// Expressions

expression: conditionalExpr;

conditionalExpr:
	logicalOrExpr ('?' expression ':' conditionalExpr)?;

logicalOrExpr: logicalAndExpr ('||' logicalAndExpr)*;

logicalAndExpr: equalityExpr ('&&' equalityExpr)*;

equalityExpr: relationalExpr (( '==' | '!=') relationalExpr)*;

relationalExpr: addExpr (( '<' | '<=' | '>' | '>=') addExpr)*;

addExpr: mulExpr (( '+' | '-' | '..') mulExpr)*;

mulExpr: unaryExpr (( '*' | '/' | '%') unaryExpr)*;

unaryExpr: ('+' | '-' | '!' | '^') unaryExpr | primaryExpr;

primaryExpr: selectorExpr;

selectorExpr: indexExpr ('.' identifier)*;

indexExpr: sliceExpr ('[' expression? ']')*;

sliceExpr: callExpr ('[' expression? ':' expression? ']')*;

callExpr: operand ('(' argumentList? ')')?;

argumentList: (expression (',' expression)* (',' '...')? | '...');

operand:
	literal
	| identifier
	| '(' expression ')'
	| funcLit
	| importExpr
	| errorExpr
	| immutableExpr;

exprList: expression (',' expression)*;

literal:
	intLit
	| floatLit
	| charLit
	| stringLit
	| boolLit
	| undefinedLit
	| arrayLit
	| mapLit;

// Literals

intLit: INTEGER;

floatLit: FLOAT;

charLit: CHAR;

stringLit: STRING | RAW_STRING;

boolLit: 'true' | 'false';

undefinedLit: 'undefined';

arrayLit: '[' (expression (',' expression)* ','?)? ']';

mapLit: '{' (mapElement (',' mapElement)* ','?)? '}';

mapElement: (STRING | identifier) ':' expression;

// Function Literal: func(x,y) { ... }
funcLit: 'func' parameters blockStmt;

parameters: '(' (identifier (',' identifier)*)? ')';

// Built-in function calls
importExpr: 'import' '(' STRING ')';

errorExpr: 'error' '(' expression ')';

immutableExpr: 'immutable' '(' expression ')';

identifier: IDENTIFIER;

// Lexer Rules

IDENTIFIER: [a-zA-Z_] [a-zA-Z_0-9]*;

// Exponent part for floating-point numbers
EXPONENT: [eE] [+-]? [0-9]+;

INTEGER:
	'0'
	| [1-9] [0-9]*
	| '0x' [0-9a-fA-F]+
	| '0o' [0-7]+
	| '0b' [01]+;

FLOAT:
	[0-9]+ '.' [0-9]* EXPONENT?
	| '.' [0-9]+ EXPONENT?
	| [0-9]+ EXPONENT;

CHAR: '\'' (~['\\\r\n] | '\\' .) '\'';

STRING: '"' (~["\\\r\n] | '\\' .)* '"';

RAW_STRING: '`' .*? '`';

// Keywords
TRUE: 'true';
FALSE: 'false';
UNDEFINED: 'undefined';

IF: 'if';
ELSE: 'else';
FOR: 'for';
IN: 'in';
RETURN: 'return';
BREAK: 'break';
CONTINUE: 'continue';
EXPORT: 'export';
FUNC: 'func';
IMPORT: 'import';
ERROR: 'error';
IMMUTABLE: 'immutable';

// Operators
PLUS: '+';
MINUS: '-';
STAR: '*';
SLASH: '/';
PERCENT: '%';
EQ: '=';
NOT: '!';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
LPAREN: '(';
RPAREN: ')';
COMMA: ',';
DOT: '.';
COLON: ':';
SEMI: ';';
INC: '++';
DEC: '--';
ELLIPSIS: '...';

// Compound operators
EQUAL: '==';
NOT_EQUAL: '!=';
LTE: '<=';
GTE: '>=';
AND: '&&';
OR: '||';
ADD_ASSIGN: '+=';
SUB_ASSIGN: '-=';
MUL_ASSIGN: '*=';
QUO_ASSIGN: '/=';
REM_ASSIGN: '%=';
OR_ASSIGN: '||=';
AND_ASSIGN: '&&=';
DEFINE: ':=';

// Other tokens
GT: '>';
LT: '<';
POUND: '#';
WS: [ \t\r\n\u000C]+ -> skip;
COMMENT: ('//' ~[\r\n]* '\r'? '\n' | '/*' .*? '*/') -> skip;