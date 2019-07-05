const antlr4 = require("antlr4");
const StatLexer = require("./lib/statLexer").statLexer;
const StatParser = require("./lib/statParser").statParser;
const Visitor = require("./statCustomVisitor");

// function buildAst(inputText) {
let inputText = 'if ("teste") return; ';
var chars = new antlr4.InputStream(inputText);
var lexer = new StatLexer(chars);
lexer.strictMode = false;
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new StatParser(tokens);
parser.buildParseTrees = true;
var tree = parser.statement();
// console.log(tree.toStringTree(parser.ruleNames));
// var extractor = new StatVisitor();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree);
var visitor = new Visitor().start(tree);
console.log(visitor.code);
// const output = new Visitor().start(tree);
