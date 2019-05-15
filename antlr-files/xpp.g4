grammar xpp;

program: classlist | /* epsilon */;

classlist: 'class' Identifier classdecl classlistb;

classlistb: classlist | /* epsilon */;

classdecl: 'extends' Identifier classbody | classbody;

classbody: '{' classbodyb;

classbodyb:
	classlist vardecls constructdecls methoddecls '}'
	| vardecls constructdecls methoddecls '}';

vardecls: vardecl ';' vardecls | /* epsilon */;

constructdecls: constructdecl constructdecls | /* epsilon */;

methoddecls: methoddecl methoddecls | /* epsilon */;

typedeclaration: 'int' | 'string' | Identifier;

vardecl: typedeclaration Identifier brackets multivardecl;

brackets: '[' ']' brackets | /* epsilon */;

multivardecl: vardeclcomma multivardecl | /* epsilon */;

vardeclcomma: ',' Identifier brackets;

constructdecl: 'constructor' methodbody;

methoddecl:
	'method' typedeclaration brackets Identifier methodbody;

methodbody: '(' paramlist ')' statement;

paramlist:
	typedeclaration Identifier brackets multiparam
	| /* epsilon */;

multiparam:
	',' typedeclaration Identifier brackets multiparam
	| /* epsilon */;

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

atribstatb: expression | alocexpression;

printstat: 'print' expression;

readstat: 'read' Identifier lvalue;

returnstat: 'return' returnstatb;

returnstatb: expression | /* epsilon */;

superstat: 'super' '(' arglist ')';

ifstat:
	'if' '(' expression ')' statement
	| 'ife' '(' expression ')' statement 'else' statement;

forstat: 'for' '(' insidefor ')' statement;

insidefor: atribstat ';' insideforb | ';' insideforb;

insideforb: ';' insideforc | expression ';' insideforc;

insideforc: atribstat | /* epsilon */;

statlist: statement statlistb;

statlistb: statlist | /* epsilon */;

lvalue:
	'[' expression ']' lvalue
	| '.' Identifier lvalueb
	| /* epsilon */;

lvalueb: '(' arglist ')' lvalue | lvalue;

alocexpression: 'new' alocexpressionb;

alocexpressionb:
	Identifier alocexpressionc
	| 'int' expressions
	| 'string' expressions;

alocexpressionc: '(' arglist ')' | expressions;

expressions: '[' expression ']' expressionsb;

expressionsb: expressions | /* epsilon */;

expression: numexpression expressionb;

expressionb:
	'<' expressionc
	| '>' expressionc
	| '==' numexpression
	| '!=' numexpression
	| /* epsilon */;

expressionc: numexpression | '=' numexpression;

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
	| 'null'
	| Identifier lvalue
	| '(' expression ')';

arglist: expression arglists | /* epsilon */;

arglists: ',' expression arglists | /* epsilon */;

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
Greater: '>';
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
IntConstant: ('-')? [0-9];
StringConstant: '"' (.)*? '"';