grammar expsdec;

program: exps ';' dec | /* epsilon */;

exps: numexpression;

dec: vardecl;

vardecl: typedeclaration Identifier brackets multivardecl;

typedeclaration: 'int' | 'string' | Identifier;

brackets: '[' ']' brackets | /* epsilon */;

multivardecl: vardeclcomma multivardecl | /* epsilon */;

vardeclcomma: ',' Identifier brackets;

lvalue:
	'[' IntConstant ']' lvalue
	| '.' Identifier lvalueb
	| /* epsilon */;

lvalueb: '(' IntConstant ')' lvalue | lvalue;

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
	| '(' numexpression ')';

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
IntConstant: ('-')? ([0-9])+;
StringConstant: '"' (.)*? '"';