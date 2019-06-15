const antlr4 = require("antlr4");
const XppLexer = require("./lib/xppLexer").xppLexer;
const XppParser = require("./lib/xppParser").xppParser;
const Visitor = require("./ll1xppVisitor");

// function buildAst(inputText) {
let inputText = "class data }";
var chars = new antlr4.InputStream(inputText);
var lexer = new XppLexer(chars);
lexer.strictMode = false;
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new XppParser(tokens);
parser.buildParseTrees = true;
var tree = parser.program();
// console.log(tree.toStringTree(parser.ruleNames));
// var extractor = new XppVisitor();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree);
var visitor = new Visitor().start(tree);
console.log(visitor);
// const output = new Visitor().start(tree);
