const antlr4 = require("antlr4");
const ExpsdecLexer = require("./lib/expsdecLexer").expsdecLexer;
const ExpsdecParser = require("./lib/expsdecParser").expsdecParser;
const Visitor = require("./expsdecCustomVisitor");

// function buildAst(inputText) {
let inputText = "a + b ; int m";
var chars = new antlr4.InputStream(inputText);
var lexer = new ExpsdecLexer(chars);
lexer.strictMode = false;
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ExpsdecParser(tokens);
parser.buildParseTrees = true;
var tree = parser.program();
console.log(tree.toStringTree(parser.ruleNames));
// var extractor = new expsdecVisitor();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree);
var visitor = new Visitor().start(tree);
console.log(visitor);
// const output = new Visitor().start(tree);
