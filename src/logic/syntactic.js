export default class Syntactic {
  constructor() {
    this.T = new Set([
      "ife",
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
      "NUMEXPRESSION",
      "TERMS",
      "TERM",
      "UNARYEXPRS",
      "UNARYEXPR",
      "FACTOR",
      "ARGLIST",
      "ARGLISTS",
      "VARORATRIB"
    ]);

    this.P = [
      {
        head: "PROGRAM",
        prods: [["&"], ["CLASSLIST"]]
      },
      {
        head: "CLASSLIST",
        prods: [["class", "ident", "CLASSDECL", "CLASSLISTB"]]
      },
      {
        head: "CLASSLISTB",
        prods: [["&"], ["CLASSLIST"]]
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
        prods: [["&"], ["VARDECL", ";", "VARDECLS"]]
      },
      {
        head: "CONSTRUCTDECLS",
        prods: [["&"], ["CONSTRUCTDECL", "CONSTRUCTDECLS"]]
      },
      {
        head: "METHODDECLS",
        prods: [["&"], ["METHODDECL", "METHODDECLS"]]
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
        prods: [["&"], ["[", "]", "BRACKETS"]]
      },
      {
        head: "MULTIVARDECL",
        prods: [["&"], ["VARDECLCOMMA", "MULTIVARDECL"]]
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
        prods: [["&"], ["TYPE", "ident", "BRACKETS", "MULTIPARAM"]]
      },
      {
        head: "MULTIPARAM",
        prods: [["&"], [",", "TYPE", "ident", "BRACKETS", "MULTIPARAM"]]
      },
      {
        head: "STATEMENT",
        prods: [
          ["int", "ident", "BRACKETS", "MULTIVARDECL", ";"],
          ["string", "ident", "BRACKETS", "MULTIVARDECL", ";"],
          ["ident", "VARORATRIB"],
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
        head: "VARORATRIB",
        prods: [
          ["ident", "BRACKETS", "MULTIVARDECL", ";"],
          ["LVALUE", "=", "ATRIBSTATB", ";"]
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
        prods: [["&"], ["EXPRESSION"]]
      },
      {
        head: "SUPERSTAT",
        prods: [["super", "(", "ARGLIST", ")"]]
      },
      {
        head: "IFSTAT",
        prods: [
          ["if", "(", "EXPRESSION", ")", "STATEMENT"],
          ["ife", "(", "EXPRESSION", ")", "STATEMENT", "else", "STATEMENT"]
        ]
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
        prods: [["&"], ["ATRIBSTAT"]]
      },
      {
        head: "STATLIST",
        prods: [["STATEMENT", "STATLISTB"]]
      },
      {
        head: "STATLISTB",
        prods: [["&"], ["STATLIST"]]
      },
      {
        head: "LVALUE",
        prods: [
          ["&"],
          ["[", "EXPRESSION", "]", "LVALUE"],
          [".", "ident", "LVALUEB"]
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
        prods: [["&"], ["EXPRESSIONS"]]
      },
      {
        head: "EXPRESSION",
        prods: [["NUMEXPRESSION", "EXPRESSIONB"]]
      },
      {
        head: "EXPRESSIONB",
        prods: [
          ["&"],
          ["<", "NUMEXPRESSION"],
          ["<=", "NUMEXPRESSION"],
          [">=", "NUMEXPRESSION"],
          [">", "NUMEXPRESSION"],
          ["==", "NUMEXPRESSION"],
          ["!=", "NUMEXPRESSION"]
        ]
      },
      {
        head: "NUMEXPRESSION",
        prods: [["TERM", "TERMS"]]
      },
      {
        head: "TERMS",
        prods: [["&"], ["+", "TERM", "TERMS"], ["-", "TERM", "TERMS"]]
      },
      {
        head: "TERM",
        prods: [["UNARYEXPR", "UNARYEXPRS"]]
      },
      {
        head: "UNARYEXPRS",
        prods: [
          ["&"],
          ["*", "UNARYEXPR", "UNARYEXPRS"],
          ["/", "UNARYEXPR", "UNARYEXPRS"],
          ["%", "UNARYEXPR", "UNARYEXPRS"]
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
        prods: [["&"], ["EXPRESSION", "ARGLISTS"]]
      },
      {
        head: "ARGLISTS",
        prods: [["&"], [",", "EXPRESSION", "ARGLISTS"]]
      }
    ];

    this.S = "PROGRAM";
    this.first = [];
    this.follow = [];

    for (let each of this.N) {
      this.first[each] = new Set();
      this.follow[each] = new Set();
    }

    this.compute_first_set();
    this.compute_follow_set();

    this.parsing_table = [];
    this.build_parsing_table();
    this.stack = [];
    this.result = [{ message: "", line_number: "" }];

    // console.log(this.first);
    // console.log(this.follow);
    // console.log(this.parsing_table);

    console.log(`A gramatática é LL(1)? ${this.is_ll1()}`);
  }

  compute_first_set() {
    let old_first = [];
    let add_terminals_epsilon = false;
    while (true) {
      for (let each of this.N) {
        old_first[each] = new Set([...this.first[each]]);
      }

      if (!add_terminals_epsilon) {
        for (let head of this.N) {
          let rule = this.P.filter(prod => prod.head === head);
          for (let production of rule[0].prods) {
            // If is a terminal or epsilon add to first set of head
            if (this.T.has(production[0]) || production[0] === "&") {
              this.first[head].add(production[0]);
            }
          }
        }
        add_terminals_epsilon = true;
      }
      for (let head of this.N) {
        let rule = this.P.filter(prod => prod.head === head);
        for (let production of rule[0].prods) {
          // If is non terminal
          if (this.N.has(production[0])) {
            // If first symbol is non terminal and first set has something
            if (this.first[production[0]].size !== 0) {
              for (let each of this.first[production[0]]) {
                if (each === "&") {
                  let i = 1;
                  let next_production = production[i];
                  let chained_epsilon = true;
                  while (next_production !== undefined) {
                    if (this.T.has(next_production)) {
                      this.first[head].add(next_production);
                      chained_epsilon = false;
                      break;
                    } else if (this.first[next_production].has("&")) {
                      this.first[next_production].forEach(e => {
                        if (e !== "&") this.first[head].add(e);
                      });
                    } else {
                      this.first[next_production].forEach(e =>
                        this.first[head].add(e)
                      );
                      chained_epsilon = false;
                      break;
                    }
                    i++;
                    next_production = production[i];
                  }
                  if (chained_epsilon) this.first[head].add("&");
                  continue;
                }
                this.first[head].add(each);
              }
            }
          }
        }
      }
      if (!this.first_has_changed(old_first)) break;
    }
  }
  compute_follow_set() {
    // 1 – Se A é o símbolo inicial da gramática -> $ ∈ Follow(A)
    this.follow[this.S].add("$");

    while (true) {
      let old_follow = [];
      for (let each of this.N) {
        old_follow[each] = new Set([...this.follow[each]]);
      }

      for (let A of this.N) {
        let rule = this.P.filter(prod => prod.head === A);
        for (let production of rule[0].prods) {
          for (const [i, element] of production.entries()) {
            if (this.N.has(element)) {
              let B = element;
              let Beta = new Set();
              let index = i + 1;
              while (production[index] !== undefined) {
                Beta.add(production[index]);
                index++;
              }
              let BetaFirst = Beta.size > 0 ? this.get_first(Beta) : new Set();
              // 2 – Se A -> α B β ∈ P ∧ β ≠ ε -> adicione first(β) em Follow(B)
              if (Beta.size > 0) {
                for (let each of BetaFirst) {
                  this.follow[B].add(each);
                }
                this.follow[B].delete("&");
              }
              // 3 – Se A -> αB (ou A->αBβ, onde ε ∈ First(β)) ∈ P -> adicione Follow(A) em Follow(B)
              if (Beta.size === 0 || BetaFirst.has("&")) {
                for (let follow_A of this.follow[A]) {
                  this.follow[B].add(follow_A);
                }
              }
            }
          }
        }
      }
      if (!this.follow_has_changed(old_follow)) break;
    }
  }

  get_first(Beta) {
    if ([...Beta][0] === "&") return new Set("&");
    let FirstBeta = new Set();
    let i = 0;
    let has_epsilon = false;
    while ([...Beta][i] !== undefined) {
      if (this.T.has([...Beta][i])) {
        FirstBeta.add([...Beta][i]);
        has_epsilon = false;
        break;
      } else {
        for (let each of this.first[[...Beta][i]]) {
          FirstBeta.add(each);
        }
        if (this.first[[...Beta][i]].has("&")) {
          FirstBeta.delete("&");
          has_epsilon = true;
        } else {
          has_epsilon = false;
          break;
        }
      }
      i++;
    }
    if (has_epsilon) FirstBeta.add("&");
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

  first_has_changed(old_first) {
    for (let each of this.N) {
      if (!this.equal_sets(old_first[each], this.first[each])) {
        return true;
      }
    }
    return false;
  }

  build_parsing_table() {
    for (let A of this.N) {
      this.parsing_table[A] = [];
      for (let b of this.T) {
        this.parsing_table[A][b] = { prod: new Set() };
      }
      this.parsing_table[A]["$"] = { prod: new Set() };
    }
    for (let A of this.N) {
      let rule = this.P.filter(prod => prod.head === A);
      for (let production of rule[0].prods) {
        if (production[0] === "&") {
          for (let b of this.follow[A]) {
            this.parsing_table[A][b].prod.add("&");
          }
          if (this.follow[A].has("$")) {
            this.parsing_table[A]["$"].prod.add("&");
          }
        } else {
          for (let a of this.get_first(new Set(production))) {
            if (a === "&") {
              for (let b of this.follow[A]) {
                this.parsing_table[A][b].prod.add(production);
              }
              if (this.follow[A].has("$")) {
                this.parsing_table[A]["$"].prod.add("&");
              }
            } else {
              this.parsing_table[A][a].prod.add(production);
            }
          }
        }
      }
    }
    // Set empty to error state
    for (let A of this.N) {
      if (!this.parsing_table[A]["$"].prod.size)
        this.parsing_table[A]["$"].prod.add("<erro>");
      for (let b of this.T) {
        if (!this.parsing_table[A][b].prod.size) {
          this.parsing_table[A][b].prod.add("<erro>");
        }
      }
    }
  }

  analysis(symbol_table) {
    /* Make a local copy of the symbol table */
    this.symbol_table = JSON.parse(JSON.stringify(symbol_table));

    /* Check if symbol table not empty */
    if (!this.symbol_table.length) {
      this.result[0].message = "Empty symbol table!";
      this.result[0].line_number = "";
      return;
    }

    /* Add símbolo $ e símbolo inicial à pilha */
    this.stack = ["$", "PROGRAM"];

    /* Add símbolo $ ao final da lista de tokens */
    this.symbol_table.push({
      id: this.symbol_table[this.symbol_table.length - 1].id + 1,
      token: "END",
      lexeme: "$",
      detail: "",
      line: this.symbol_table[this.symbol_table.length - 1].line
    });

    /* Loop de processamento da stack */
    while (this.symbol_table.length > 0) {
      console.log(this.stack);
      let stack_symbol = this.stack.pop();
      if (stack_symbol === "&") {
        continue;
      }

      let input_element = this.symbol_table.shift();
      if (stack_symbol === "$" && this.symbol_table.length) {
        this.result[0].message = "Syntactic error!";
        this.result[0].line_number = input_element.line;
        return;
      }

      /* Mapeamento de id, num e string para os respectivos tokens */
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
      console.log(input_element.lexeme);
      /* Quando o símbolo do topo da pilha é igual ao próximo token,
       * token é removido da pilha e da lista de tokens. Avança para a próxima iteração do loop. */
      if (input_element.lexeme === stack_symbol) {
        continue;
      }

      /* Se o símbolo da pilha não pertence aos não terminais: ERRO */
      if (!this.N.has(stack_symbol)) {
        this.result[0].message = "Syntactic error!";
        this.result[0].line_number = input_element.line;
        return;

        /* Senão, se a transição na tabela preditiva entre simbolo da pilha e próximo token for para
         * um estado de erro: ERRO */
      } else if (
        this.parsing_table[stack_symbol][input_element.lexeme].prod.has(
          "<erro>"
        )
      ) {
        this.result[0].message = "Syntactic error!";
        this.result[0].line_number = input_element.line;
        return;

        /* Senão, devolve o token a lista de tokens e empilha os símbolos de acordo com a tabela preditiva */
      } else {
        this.symbol_table.unshift(input_element);

        let items = [
          ...this.parsing_table[stack_symbol][input_element.lexeme].prod
        ][0];
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

  /*
   * A grammar G is LL(1) if and only if whenever A -> α | β are two distinct
   * productions of G, the following conditions hold:
   *
   *   1. For no terminal a do both α and β derive strings beginning with a.
   *   2. At most one of α and β can derive the empty string.
   *   3. If β *⇒ ε, then α does not derive any string beginning with a terminal
   *      in FOLLOW(A). Likewise, if α *⇒ ε, then β does not derive any string
   *      beginning with a terminal in FOLLOW(A).
   *
   * The first two conditions are equivalent to the statement that FIRST(α) and
   * FIRST(β) are disjoint sets. The third condition is equivalent to stating
   * that if ε is in FIRST(β), then FIRST(α) and FOLLOW(A) are disjoint sets,
   * and likewise if ε is in FIRST(α).
   *
   * Alfred V. Aho. Compilers: Principles, Techniques, and Tools (2nd Edition)
   */
  is_ll1() {
    let is_ll1 = true;

    for (let production of this.P) {
      for (let prod1 in production.prods) {
        for (let prod2 in production.prods) {
          if (prod1 !== prod2) {
            /* Condições 1 e 2 */
            let setAlpha = new Set(production.prods[prod1]);
            let setBeta = new Set(production.prods[prod2]);
            let firstAlpha = this.get_first(setAlpha);
            let firstBeta = this.get_first(setBeta);
            is_ll1 = is_ll1 && this.is_disjoint(firstAlpha, firstBeta);

            /* Condição 3 */
            if (firstBeta.has("&")) {
              is_ll1 =
                is_ll1 &&
                this.is_disjoint(firstAlpha, this.follow[production.head]);
            }
            if (firstAlpha.has("&")) {
              is_ll1 =
                is_ll1 &&
                this.is_disjoint(firstBeta, this.follow[production.head]);
            }
          }
        }
      }
    }
    return is_ll1;
  }

  is_disjoint(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem);
      }
    }
    return _intersection.size === 0;
  }
}
