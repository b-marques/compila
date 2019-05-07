export default class Syntactic {
  constructor() {
    this.T = new Set([
      "method",
      "ident",
      "int-constant",
      "string-constant",
      "class",
      "extends",
      "int",
      "string",
      "constructor",
      "break",
      "print",
      "read",
      "return",
      "super",
      "if",
      "else",
      "for",
      "new",
      "null",
      "*",
      "/",
      "%",
      "+",
      "-",
      "{",
      "}",
      ";",
      "[",
      "]",
      "(",
      ")",
      ",",
      ".",
      "<",
      "<=",
      ">",
      ">=",
      "==",
      "!=",
      "="
    ]);

    this.N = new Set([
      "PROGRAM",
      "CLASSLIST",
      "CLASSLISTB",
      "CLASSDECL",
      "CLASSBODY",
      "CLASSBODYB",
      "VARDECLS",
      "CONSTRUCTDECLS",
      "METHODDECLS",
      "TYPE",
      "VARDECL",
      "BRACKETS",
      "MULTIVARDECL",
      "VARDECLCOMMA",
      "CONSTRUCTDECL",
      "METHODDECL",
      "METHODBODY",
      "PARAMLIST",
      "MULTIPARAM",
      "STATEMENT",
      "ATRIBSTAT",
      "ATRIBSTATB",
      "PRINTSTAT",
      "READSTAT",
      "RETURNSTAT",
      "RETURNSTATB",
      "SUPERSTAT",
      "IFSTAT",
      "IFSTATB",
      "FORSTAT",
      "INSIDEFOR",
      "INSIDEFORB",
      "INSIDEFORC",
      "STATLIST",
      "STATLISTB",
      "LVALUE",
      "LVALUEB",
      "ALOCEXPRESSION",
      "ALOCEXPRESSIONB",
      "ALOCEXPRESSIONC",
      "EXPRESSIONS",
      "EXPRESSIONSB",
      "EXPRESSION",
      "EXPRESSIONB",
      "EXPRESSIONC",
      "NUMEXPRESSION",
      "TERMS",
      "TERM",
      "UNARYEXPRS",
      "UNARYEXPR",
      "FACTOR",
      "ARGLIST",
      "ARGLISTS"
    ]);

    this.P = [
      {
        head: "PROGRAM",
        prods: [["CLASSLIST"], ["&"]]
      },
      {
        head: "CLASSLIST",
        prods: [["class", "ident", "CLASSDECL", "CLASSLISTB"]]
      },
      {
        head: "CLASSLISTB",
        prods: [["CLASSLIST"], ["&"]]
      },
      {
        head: "CLASSDECL",
        prods: [["extends", "ident", "CLASSBODY"], ["CLASSBODY"]]
      },

      {
        head: "CLASSBODY",
        prods: [["{", "CLASSBODYB"]]
      },
      {
        head: "CLASSBODYB",
        prods: [
          ["CLASSLIST", "VARDECLS", "CONSTRUCTDECLS", "METHODDECLS", "}"],
          ["VARDECLS", "CONSTRUCTDECLS", "METHODDECLS", "}"]
        ]
      },
      {
        head: "VARDECLS",
        prods: [["VARDECL", ";", "VARDECLS"], ["&"]]
      },
      {
        head: "CONSTRUCTDECLS",
        prods: [["CONSTRUCTDECL", "CONSTRUCTDECLS"], ["&"]]
      },
      {
        head: "METHODDECLS",
        prods: [["METHODDECL", "METHODDECLS"], ["&"]]
      },
      {
        head: "TYPE",
        prods: [["int"], ["string"], ["ident"]]
      },
      {
        head: "VARDECL",
        prods: [["TYPE", "ident", "BRACKETS", "MULTIVARDECL"]]
      },
      {
        head: "BRACKETS",
        prods: [["[", "]", "BRACKETS"], ["&"]]
      },
      {
        head: "MULTIVARDECL",
        prods: [["VARDECLCOMMA", "MULTIVARDECL"], ["&"]]
      },
      {
        head: "VARDECLCOMMA",
        prods: [[",", "ident", "BRACKETS"]]
      },
      {
        head: "CONSTRUCTDECL",
        prods: [["constructor", "METHODBODY"]]
      },
      {
        head: "METHODDECL",
        prods: [["method", "TYPE", "BRACKETS", "ident", "METHODBODY"]]
      },
      {
        head: "METHODBODY",
        prods: [["(", "PARAMLIST", ")", "STATEMENT"]]
      },
      {
        head: "PARAMLIST",
        prods: [["TYPE", "ident", "BRACKETS", "MULTIPARAM"], ["&"]]
      },
      {
        head: "MULTIPARAM",
        prods: [[",", "TYPE", "ident", "BRACKETS", "MULTIPARAM"], ["&"]]
      },
      {
        head: "STATEMENT",
        prods: [
          ["VARDECL", ";"],
          ["ATRIBSTAT", ";"],
          ["PRINTSTAT", ";"],
          ["READSTAT", ";"],
          ["RETURNSTAT", ";"],
          ["SUPERSTAT", ";"],
          ["IFSTAT"],
          ["FORSTAT"],
          ["{", "STATLIST", "}"],
          ["break", ";"],
          [";"]
        ]
      },

      {
        head: "ATRIBSTAT",
        prods: [["ident", "LVALUE", "=", "ATRIBSTATB"]]
      },
      {
        head: "ATRIBSTATB",
        prods: [["EXPRESSION"], ["ALOCEXPRESSION"]]
      },

      {
        head: "PRINTSTAT",
        prods: [["print", "EXPRESSION"]]
      },
      {
        head: "READSTAT",
        prods: [["read", "ident", "LVALUE"]]
      },
      {
        head: "RETURNSTAT",
        prods: [["return", "RETURNSTATB"]]
      },
      {
        head: "RETURNSTATB",
        prods: [["EXPRESSION"], ["&"]]
      },
      {
        head: "SUPERSTAT",
        prods: [["super", "(", "ARGLIST", ")"]]
      },
      {
        head: "IFSTAT",
        prods: [["if", "(", "EXPRESSION", ")", "STATEMENT", "IFSTATB"]]
      },
      {
        head: "IFSTATB",
        prods: [["else", "STATEMENT"], ["&"]]
      },
      {
        head: "FORSTAT",
        prods: [["for", "(", "INSIDEFOR", ")", "STATEMENT"]]
      },
      {
        head: "INSIDEFOR",
        prods: [["ATRIBSTAT", ";", "INSIDEFORB"], [";", "INSIDEFORB"]]
      },

      {
        head: "INSIDEFORB",
        prods: [[";", "INSIDEFORC"], ["EXPRESSION", ";", "INSIDEFORC"]]
      },

      {
        head: "INSIDEFORC",
        prods: [["ATRIBSTAT"], ["&"]]
      },
      {
        head: "STATLIST",
        prods: [["STATEMENT", "STATLISTB"]]
      },
      {
        head: "STATLISTB",
        prods: [["STATLIST"], ["&"]]
      },
      {
        head: "LVALUE",
        prods: [
          ["[", "EXPRESSION", "]", "LVALUE"],
          [".", "ident", "LVALUEB"],
          ["&"]
        ]
      },

      {
        head: "LVALUEB",
        prods: [["(", "ARGLIST", ")", "LVALUE"], ["LVALUE"]]
      },

      {
        head: "ALOCEXPRESSION",
        prods: [["new", "ALOCEXPRESSIONB"]]
      },
      {
        head: "ALOCEXPRESSIONB",
        prods: [
          ["ident", "ALOCEXPRESSIONC"],
          ["int", "EXPRESSIONS"],
          ["string", "EXPRESSIONS"]
        ]
      },

      {
        head: "ALOCEXPRESSIONC",
        prods: [["(", "ARGLIST", ")"], ["EXPRESSIONS"]]
      },

      {
        head: "EXPRESSIONS",
        prods: [["[", "EXPRESSION", "]", "EXPRESSIONSB"]]
      },
      {
        head: "EXPRESSIONSB",
        prods: [["EXPRESSIONS"], ["&"]]
      },
      {
        head: "EXPRESSION",
        prods: [["NUMEXPRESSION", "EXPRESSIONB"]]
      },
      {
        head: "EXPRESSIONB",
        prods: [
          ["<", "EXPRESSIONC"],
          [">", "EXPRESSIONC"],
          ["==", "NUMEXPRESSION"],
          ["!=", "NUMEXPRESSION"],
          ["&"]
        ]
      },
      {
        head: "EXPRESSIONC",
        prods: [["NUMEXPRESSION"], ["=", "NUMEXPRESSION"]]
      },
      {
        head: "NUMEXPRESSION",
        prods: [["TERM", "TERMS"]]
      },
      {
        head: "TERMS",
        prods: [["+", "TERM", "TERMS"], ["-", "TERM", "TERMS"], ["&"]]
      },
      {
        head: "TERM",
        prods: [["UNARYEXPR", "UNARYEXPRS"]]
      },
      {
        head: "UNARYEXPRS",
        prods: [
          ["*", "UNARYEXPR", "UNARYEXPRS"],
          ["/", "UNARYEXPR", "UNARYEXPRS"],
          ["%", "UNARYEXPR", "UNARYEXPRS"],
          ["&"]
        ]
      },

      {
        head: "UNARYEXPR",
        prods: [["+", "FACTOR"], ["-", "FACTOR"], ["FACTOR"]]
      },

      {
        head: "FACTOR",
        prods: [
          ["int-constant"],
          ["string-constant"],
          ["null"],
          ["ident", "LVALUE"],
          ["(", "EXPRESSION", ")"]
        ]
      },
      {
        head: "ARGLIST",
        prods: [["EXPRESSION", "ARGLISTS"], ["&"]]
      },
      {
        head: "ARGLISTS",
        prods: [[",", "EXPRESSION", "ARGLISTS"], ["&"]]
      }
    ];

    this.S = "PROGRAM";
    this.first = [];
    this.follow = [];

    for (let each of this.N) {
      this.first[each] = new Set();
      this.follow[each] = new Set();
    }

    for (let head of this.N) {
      this.compute_first_set(head);
    }

    this.compute_follow_set();

    this.parsing_table = [];
    this.build_parsing_table();
    this.stack = [];
    this.result = [{ message: ", line_number: " }];
  }

  compute_first_set(head) {
    let rule = this.P.filter(prod => prod.head === head);
    for (let production of rule[0].prods) {
      console.log(production[0]);
      console.log("-------------");
      // If is a terminal or epsilon add to first set of head
      if (this.T.has(production[0]) || production[0] === "&") {
        this.first[head].add(production[0]);
      } else {
        // If not terminal first symbol is non terminal and first set has something
        if (this.first[production[0]].size !== 0) {
          for (let each of this.first[production[0]]) {
            this.first[head].add(each);
          }
        } else {
          this.compute_first_set(production[0]);
          this.compute_first_set(head);
        }
      }
    }
  }
  compute_follow_set() {
    // 1 – Se A é o símbolo inicial da gramática -> $ ∈ Follow(A)
    this.follow[this.S].add("$");

    let loops = 0;
    do {
      let old_follow = [];
      for (let each of this.N) {
        old_follow[each] = new Set([...this.follow[each]]);
      }

      for (let A of this.N) {
        let rule = this.P.filter(prod => prod.head === A);
        for (let production of rule[0].prods) {
          for (const [i, element] of production.entries()) {
            let B = element;
            let Beta = new Set();
            let index = i + 1;
            while (production[index] !== undefined) {
              Beta.add(production[index]);
              index++;
            }
            let BetaFirst = Beta.size > 0 ? this.get_first(Beta) : new Set();

            // 2 – Se A -> α B β ∈ P ∧ β ≠ ε -> adicione first(β) em Follow(B)
            if (loops === 0) {
              if (this.N.has(B) && (Beta.size > 0 && [...Beta][0] !== "&")) {
                for (let each of BetaFirst) {
                  this.follow[B].add(each);
                }
                this.follow[B].delete("&");
              }
            }

            // 3 – Se A -> αB (ou A->αBβ, onde ε ∈ First(β)) ∈ P -> adicione Follow(A) em Follow(B)
            if (this.N.has(B) && (Beta.size === 0 || BetaFirst.has("&"))) {
              for (let follow of this.follow[A]) {
                this.follow[B].add(follow);
              }
              this.follow[B].delete("&");
            }
          }
        }
      }

      loops++;

      if (!this.follow_has_changed(old_follow)) break;
    } while (true);
  }

  get_first(Beta) {
    if (this.T.has([...Beta][0])) {
      return new Set([[...Beta][0]]);
    }
    let FirstBeta = new Set();
    let i = 0;
    while ([...Beta][i] !== undefined) {
      if (this.T.has([...Beta][i])) {
        FirstBeta.add([...Beta][i]);
        FirstBeta.delete("&");
        return FirstBeta;
      }
      for (let each of this.first[[...Beta][i]]) {
        FirstBeta.add(each);
      }
      if (!this.first[[...Beta][i]].has("&")) {
        FirstBeta.delete("&");
        return FirstBeta;
      }
      i++;
    }
    return FirstBeta;
  }

  equal_sets(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
  }

  follow_has_changed(old_follow) {
    for (let each of this.N) {
      if (!this.equal_sets(old_follow[each], this.follow[each])) {
        return true;
      }
    }
    return false;
  }

  build_parsing_table() {
    for (let A of this.N) {
      this.parsing_table[A] = [];
      for (let b of this.T) {
        this.parsing_table[A][b] = { prod: ["<erro>"] };
      }
      this.parsing_table[A]["$"] = { prod: ["<erro>"] };
    }
    for (let A of this.N) {
      for (let a of this.first[A]) {
        if (a === "&") {
          for (let b of this.follow[A]) {
            this.parsing_table[A][b].prod = ["&"];
          }
        } else {
          let rule = this.P.filter(prod => prod.head === A);
          for (let production of rule[0].prods) {
            if (production[0] === a) {
              this.parsing_table[A][a].prod = production;
            } else if (this.N.has(production[0])) {
              for (let each of this.first[production[0]]) {
                if (each !== "&") {
                  if (this.parsing_table[A][each].prod.includes("<erro>")) {
                    this.parsing_table[A][each].prod = production;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  analysis(symbol_table) {
    console.clear();
    console.log(this.parsing_table);
    if (!symbol_table.length) {
      this.result[0].message = "Empty symbol table!";
      this.result[0].line_number = "";
      return;
    }
    this.result = [{ message: ", line_number: " }];
    this.stack = ["$", "PROGRAM"];
    symbol_table.push({
      id: symbol_table[symbol_table.length - 1].id + 1,
      token: "END",
      lexema: "$",
      detail: "",
      line: symbol_table[symbol_table.length - 1].line_number
    });

    while (symbol_table.length > 0) {
      console.log(this.stack);

      let stack_symbol = this.stack.pop();
      if (stack_symbol === "&") {
        continue;
      }

      let input_element = symbol_table.shift();

      if (stack_symbol === "$" && symbol_table.length) {
        this.result[0].message = "Syntactic error!";
        this.result[0].line_number = input_element.line;
        return;
      }

      switch (input_element.token) {
        case "ID":
          input_element.lexeme = "ident";
          break;
        case "NUM":
          input_element.lexeme = "int-constant";
          break;
        case "STRING":
          input_element.lexeme = "string-constant";
          break;
        default:
          break;
      }

      if (input_element.lexeme === stack_symbol) {
        continue;
      }
      if (
        this.parsing_table[stack_symbol][input_element.lexeme].prod.includes(
          "<erro>"
        )
      ) {
        this.result[0].message = "Syntactic error!";
        this.result[0].line_number = input_element.line;
        return;
      } else {
        symbol_table.unshift(input_element);

        let items = this.parsing_table[stack_symbol][input_element.lexeme].prod;
        let i = items.length;
        while (i--) {
          this.stack.push(items[i]);
        }
      }
    }
    this.result[0].message = "Success!";
    this.result[0].line_number = "";
    return;
  }
}
