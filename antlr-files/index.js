const antlr4 = require("antlr4");
const StatLexer = require("./lib/statLexer").statLexer;
const StatParser = require("./lib/statParser").statParser;
const Visitor = require("./sdtStat");
var fs = require("fs");

/* Tratador de error customizado, armazena os erros em um array */
var ListenerLexer = function(errors) {
  antlr4.error.ErrorListener.call(this);
  this.errors = errors;
  return this;
};
ListenerLexer.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ListenerLexer.prototype.constructor = ListenerLexer;
ListenerLexer.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
  this.errors.push({
    type: "Lexical",
    symbol: msg,
    line: line,
    col: col
  });
};

var ListenerParser = function(errors) {
  antlr4.error.ErrorListener.call(this);
  this.errors = errors;
  return this;
};
ListenerParser.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ListenerParser.prototype.constructor = ListenerParser;
ListenerParser.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
  this.errors.push({
    type: "Syntactic",
    symbol: msg,
    line: line,
    col: col
  });
};
/* Fim do tratador de erro */

var errors = [];

/* Lê arquivo de entrada */
let inputText;
try {
  inputText = fs.readFileSync(process.argv[3], "utf8");
} catch (error) {
  console.log("\nArquivo inválido\n");
  return;
}

/* Converte a entrada para uma stream própria do ANTLR */
var chars = new antlr4.InputStream(inputText);

/* Inicializa o lexer do ANTLR com a entrada dada */
var lexer = new StatLexer(chars);
lexer._listeners[0] = new ListenerLexer(errors);

/* Inicializa a estrutura que irá receber os tokens produzidos pelo lexer */
var tokens = new antlr4.CommonTokenStream(lexer);

/* Inicializa o parser do ANTLR com a estrutura dos tokens gerada */
var parser = new StatParser(tokens);
parser.buildParseTrees = true;
parser._listeners[0] = new ListenerParser(errors);

/* Efetua o parsing da entrada começando pela produção inicial, gera uma árvore */
var tree = parser.statement();

/* Verifica a ocorrência de erros na análise léxica e sintática */
if (errors[0] !== undefined) {
  let lexical_error = errors.filter(e => e.type === "Lexical");
  let syntactic_error = errors.filter(e => e.type === "Syntactic");

  /* Imprime erros léxicos */
  for (let error of lexical_error) {
    let msg =
      `${error.type} error:\n` +
      `Line: ${error.line}   Col: ${error.col}\n` +
      `${error.symbol}\n` +
      `--------------------\n`;
    console.log(msg);
  }

  /* Imprime erro sintático */
  if (syntactic_error.length) {
    let error = syntactic_error[0];
    let msg =
      `${error.type} error:\n` +
      `Line: ${error.line}   Col: ${error.col}\n` +
      `${error.symbol}\n` +
      `--------------------\n`;
    console.log(msg);
  }
  return;
}

/* Percorre a árvore gerada, aplicando a SDT produzida */
var sdtStat = new Visitor();
sdtStat.start(tree);

if (process.argv[2] === "ASem2") {
  console.log(`\nHá alguma violação na verificação de tipos? Sim ou não?\n`);
  let violation = false;
  let msg = "";
  for (let e of sdtStat.numexpressions) {
    msg =
      msg +
      `Linha: ${e.line}  Coluna: ${e.col}\n` +
      `Expressão: ${e.expression}\n`;
    if (e.type.size > 1) {
      msg =
        msg +
        `Sim, há violação.\n` +
        `Tipos envolvidos: ${[...e.type].join(",")}\n\n`;
      violation = true;
    } else {
      msg =
        msg + `Não há violação.\n` + `Tipo da expressão: ${[...e.type][0]}\n\n`;
    }
  }
  msg =
    msg + "---------------------------------------------------------------\n";
  console.log(violation ? "Sim, há violação.\n" : "Não há violação.\n");
  console.log(msg);

  msg = "";
  console.log(
    "Há algum problema com a declaração de variáveis?\n" +
      "Existem duas ou mais declarações de um identificador em um mesmo escopo?\n" +
      "Sim ou não?"
  );
  let var_error = sdtStat.errors.filter(e => e.asem2 === "var per scope");
  if (var_error.length) {
    console.log("\nSim, existe algum problema na declaração de variáveis.\n");
    for (e of var_error) {
      msg = msg + `Linha: ${e.line}  Coluna: ${e.col}\n` + `${e.symbol}\n\n`;
    }
    msg =
      msg + "---------------------------------------------------------------\n";
    console.log(msg);
  } else {
    console.log("\nNão existem problemas na declaração de variáveis.\n");
    console.log(
      "---------------------------------------------------------------\n"
    );
  }

  msg = "";
  console.log(
    "Existe um comando break fora do escopo de um comando de repetição?\n" +
      "Sim ou não?\n"
  );
  let break_error = sdtStat.errors.filter(e => e.asem2 === "break");
  if (break_error.length) {
    console.log(
      "Sim, existe pelo menos um comando break fora do escopo de um comando de repetição.\n"
    );
    for (let e of break_error) {
      msg = msg + `Linha: ${e.line}  Coluna: ${e.col}\n` + `${e.symbol}\n\n`;
    }
    msg =
      msg + "---------------------------------------------------------------\n";
    console.log(msg);
  } else {
    console.log(
      "Não existe comando break fora do escopo de um comando de repetição.\n"
    );
    console.log(
      "---------------------------------------------------------------\n"
    );
  }
} else if (process.argv[2] === "GCI2") {
  if (sdtStat.errors.length) {
    /* Imprime erros semânticos */
    console.log("");
    for (let error of sdtStat.errors) {
      let msg =
        `${error.type} error:\n` +
        `Line: ${error.line}   Col: ${error.col}\n` +
        `${error.symbol}\n` +
        `--------------------\n`;
      console.log(msg);
    }
    return;
  }
  console.log(
    sdtStat.code
      .split("\n")
      .filter(e => e !== "")
      .map(e => {
        if (e[0] === "L" || e === "end:") return e;
        return `     ${e}`;
      })
      .join("\n")
  );
} else {
  console.log("Erro: Tarefa não definida");
}
