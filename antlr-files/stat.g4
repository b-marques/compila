grammar stat;

/* Productions */
statement:
	'int' Identifier brackets multivardecl ';'
	| 'string' Identifier brackets multivardecl ';'
	| Identifier varoratrib
	| printstat ';'
	| readstat ';'
	| returnstat ';'
	| superstat ';'
	| ifstat
	| forstat
	| '{' statlist '}'
	| 'break' ';'
	| ';';

varoratrib:
	Identifier brackets multivardecl ';'
	| lvalue '=' atribstatb ';';

atribstat: Identifier lvalue '=' atribstatb;

atribstatb: numexpression;

printstat: 'print' numexpression;

readstat: 'read' Identifier lvalue;

returnstat: 'return' returnstatb;

returnstatb: numexpression | /* epsilon */;

superstat: 'super' '(' IntConstant ')';

ifstat:
	'if' '(' numexpression ')' statement
	| 'ife' '(' numexpression ')' statement 'else' statement;

forstat:
	'for' '(' atribstat ';' numexpression ';' atribstat ')' statement;

statlist: statement statlistb;

statlistb: statlist | /* epsilon */;

numexpression: term terms;

terms: '+' term terms | '-' term terms | /* epsilon */;

term: unaryexpr unaryexprs;

unaryexprs:
	'*' unaryexpr unaryexprs
	| '/' unaryexpr unaryexprs
	| '%' unaryexpr unaryexprs
	| /* epsilon */;

unaryexpr: '+' factor | '-' factor | factor;

factor:
	IntConstant
	| StringConstant
	| Null
	| Identifier lvalue
	| '(' numexpression ')';

lvalue:
	'[' IntConstant ']' lvalue
	| '.' Identifier lvalueb
	| /* epsilon */;

lvalueb: '(' IntConstant ')' lvalue | lvalue;

brackets: '[' IntConstant ']' brackets | /* epsilon */;

multivardecl: vardeclcomma multivardecl | /* epsilon */;

vardeclcomma: ',' Identifier brackets;

/* Terminals */
WS: [ \t\r\n]+ -> skip; // skip spaces, tabs, newlines

LeftParen: '(';
RightParen: ')';
LeftBracket: '[';
RightBracket: ']';
LeftBrace: '{';
RightBrace: '}';

Plus: '+';
Minus: '-';
Star: '*';
Div: '/';
Mod: '%';

Semi: ';';
Comma: ',';
Dot: '.';

Less: '<';
LessEqual: '<=';
Greater: '>';
GreaterEqual: '>=';
Equal: '==';
NotEqual: '!=';
Assign: '=';

Class: 'class';
Extends: 'extends';
Int: 'int';
String: 'string';
Constructor: 'constructor';
Break: 'break';
Print: 'print';
Read: 'read';
Return: 'return';
Super: 'super';
If: 'if';
Ife: 'ife';
Else: 'else';
Method: 'method';
For: 'for';
New: 'new';
Null: 'null';

Identifier: [a-zA-Z_]( [a-zA-Z_] | [0-9])*;
IntConstant: ([0-9])+;
StringConstant: '"' (.)*? '"';