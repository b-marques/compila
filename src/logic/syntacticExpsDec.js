import addActionsToProds from "./sdtSyntaxTreeExps.js";

export default class SyntacticExpsDec {
  constructor() {
    this.T = new Set([
      "ident",
      "int-constant",
      "string-constant",
      "int",
      "string",
      "null",
      "*",
      "/",
      "%",
      "+",
      "-",
      ";",
      "[",
      "]",
      "(",
      ")",
      ",",
      "."
    ]);

    this.N = new Set([
      "PROGRAM",
      "DEC",
      "EXPS",
      "TYPE",
      "VARDECL",
      "BRACKETS",
      "MULTIVARDECL",
      "VARDECLCOMMA",
      "LVALUE",
      "LVALUEB",
      "NUMEXPRESSION",
      "TERMS",
      "TERM",
      "UNARYEXPRS",
      "UNARYEXPR",
      "FACTOR"
    ]);

    this.P = [
      {
        head: "PROGRAM",
        prods: [["&"], ["EXPS", ";", "DEC"]]
      },
      {
        head: "EXPS",
        prods: [["NUMEXPRESSION"]]
      },
      {
        head: "DEC",
        prods: [["VARDECL"]]
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
        prods: [["&"], ["[", "int-constant", "]", "BRACKETS"]]
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
        head: "LVALUE",
        prods: [
          ["&"],
          ["[", "int-constant", "]", "LVALUE"],
          [".", "ident", "LVALUEB"]
        ]
      },
      {
        head: "LVALUEB",
        prods: [["(", "int-constant", ")", "LVALUE"], ["LVALUE"]]
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
          ["(", "NUMEXPRESSION", ")"]
        ]
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
  }

  compute_first_set(head) {
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
    this.stack = [
      { name: "$" },
      { name: "Synthesize.PROGRAM" },
      { name: "PROGRAM" }
    ];

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
      console.log(this.stack.map(name => name));
      let stack_symbol = this.stack.pop();

      if (
        stack_symbol.name.includes("Synthesize") ||
        stack_symbol.name.includes("Action")
      ) {
        if (stack_symbol.actions !== undefined) {
          stack_symbol.actions(this.stack);
          console.log(stack_symbol.name);
          console.log(stack_symbol);
        }
        if (stack_symbol.name === "Synthesize.PROGRAM") {
          console.log(stack_symbol.name);
          console.log(stack_symbol);
        }
        continue;
      }

      if (stack_symbol.name === "&") {
        if (stack_symbol.actions !== undefined) {
          stack_symbol.actions(this.stack);
        }
        continue;
      }

      let input_element = this.symbol_table.shift();
      if (stack_symbol.name === "$" && this.symbol_table.length > 1) {
        this.result[0].message = "Syntactic error!";
        this.result[0].line_number = input_element.line;
        return;
      }

      /* Mapeamento de id, num e string para os respectivos tokens */
      switch (input_element.token) {
        case "ID":
          input_element.lexemeAux = "ident";
          break;
        case "NUM":
          input_element.lexemeAux = "int-constant";
          break;
        case "STRING":
          input_element.lexemeAux = "string-constant";
          break;
        default:
          input_element.lexemeAux = input_element.lexeme;
          break;
      }
      /* Quando o símbolo do topo da pilha é igual ao próximo token,
       * token é removido da pilha e da lista de tokens. Avança para a próxima iteração do loop. */
      if (input_element.lexemeAux === stack_symbol.name) {
        if (stack_symbol.actions !== undefined) {
          stack_symbol.actions(this.stack, input_element.lexeme);
        }
        continue;
      }

      /* Se o símbolo da pilha não pertence aos não terminais: ERRO */
      if (!this.N.has(stack_symbol.name)) {
        this.result[0].message = "Syntactic error!";
        this.result[0].line_number = input_element.line;
        return;

        /* Trecho de código pra tratar incoerência entre léxico LL1X++ vs EXPS e DEC */
      } else if (
        this.parsing_table[stack_symbol.name][input_element.lexemeAux] ===
        undefined
      ) {
        this.result[0].message =
          "Syntactic error! - Don't use reserved words from LL1X++";
        this.result[0].line_number = input_element.line;
        return;

        /* Senão, se a transição na tabela preditiva entre simbolo da pilha e próximo token for para
         * um estado de erro: ERRO */
      } else if (
        this.parsing_table[stack_symbol.name][input_element.lexemeAux].prod.has(
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
          ...this.parsing_table[stack_symbol.name][input_element.lexemeAux].prod
        ][0];

        items = addActionsToProds(stack_symbol, items);
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
