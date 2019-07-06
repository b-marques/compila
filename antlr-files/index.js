const antlr4 = require("antlr4");
const StatLexer = require("./lib/statLexer").statLexer;
const StatParser = require("./lib/statParser").statParser;
const Visitor = require("./statCustomVisitor");

/* Tratador de error customizado, armazena os erros em um array */
var ErrorListener = function(errors) {
  antlr4.error.ErrorListener.call(this);
  this.errors = errors;
  return this;
};
ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;
ErrorListener.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
  this.errors.push({ symbol: msg, line: line, col: col });
};
/* Fim do tratador de erro */
var errors = [];

let inputText = "if(a) data a[2], b;";

/* Converte a entrada para uma stream própria do ANTLR */
var chars = new antlr4.InputStream(inputText);

/* Inicializa o lexer do ANTLR com a entrada dada */
var lexer = new StatLexer(chars);
lexer._listeners[0] = new ErrorListener(errors);

/* Inicializa a estrutura que irá receber os tokens produzidos pelo lexer */
var tokens = new antlr4.CommonTokenStream(lexer);

/* Inicializa o parser do ANTLR com a estrutura dos tokens gerada */
var parser = new StatParser(tokens);
parser.buildParseTrees = true;
parser._listeners[0] = new ErrorListener(errors);

/* Efetua o parsing da entrada começando pela produção inicial, gera uma árvore */
var tree = parser.statement();

if (errors[0] !== undefined) {
  console.log(errors);
  // let i = errors[0].symbol.type;
  // console.log(`Erro sintático:`);
  // console.log(`Símbolo ${parser.symbolicNames[i]} ${parser.literalNames[i]}`);
  // console.log(`Linha: ${errors[0].line}`);
  // console.log(`Coluna: ${errors[0].col}`);
  return;
}

/* Percorre a árvore gerada, aplicando a SDT produzida */
var visitor = new Visitor().start(tree);
console.log(
  visitor.code
    .split("\n")
    .filter(e => e !== "")
    .map(e => {
      if (e[0] === "L" || e === "end:") return e;
      return `    ${e}`;
    })
    .join("\n")
);
