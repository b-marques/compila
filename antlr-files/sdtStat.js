const statVisitor = require("./lib/statVisitor").statVisitor;

class Visitor extends statVisitor {
  constructor() {
    super();
    this.errors = [];
    this.numexpressions = [];
    this.labels = -1;
    this.temporary = -1;
    this.scopes = { id: -1, list: [], active: undefined };
    /**
     * scope {
     *    id,
     *    type,
     *    parent,
     *    label_next,
     *    symbol_table,
     * }
     * */
  }

  start(ctx) {
    let attributes = {
      next: "end"
    };

    let synthesized = this.visitStatement(ctx, attributes);
    attributes.code = synthesized.code + attributes.next + ":";
    this.code = attributes.code;
  }

  newLabel() {
    this.labels = this.labels + 1;
    return "L" + this.labels;
  }

  newTemporary() {
    this.temporary = this.temporary + 1;
    return "t" + this.temporary;
  }

  checkType(ctx) {
    let context = ctx.parser.ruleNames[ctx.ruleIndex];
    if (context === "numexpression") {
      let processed_input = ctx
        .getText()
        .replace(" ", "")
        .split(/[+\-*\/%\)\()]/g)
        .filter(e => e !== "");
      let type = new Set();
      let int_constant = /([0-9])+/;
      let string_constant = /\"(.)*?\"/;
      let identifier = /[a-zA-Z_]( [a-zA-Z_] | [0-9])*/;
      for (let variable of processed_input) {
        if (variable === "null") {
          type.add("null");
          continue;
        }
        if (string_constant.test(variable)) {
          type.add("string");
          continue;
        }
        if (int_constant.test(variable)) {
          type.add("int");
          continue;
        }
        if (identifier.test(variable)) {
          if (this.scopes.active) {
            let name = variable.split("[")[0];
            let var_info = this.scopes.active.symbol_table.filter(
              e => e.name === name
            );
            let parent_scope = this.scopes.active.parent;
            while (!var_info.length) {
              if (!parent_scope) {
                this.errors.push({
                  asem2: "extra",
                  type: "Semantic",
                  symbol: `Variável '${name}' não foi declarada.`
                });
                break;
              }
              var_info = parent_scope.symbol_table.filter(e => e.name === name);
              parent_scope = parent_scope.parent;
            }
            var_info[0]
              ? type.add(this.typeFromSymbolTable(var_info[0]))
              : type.add("undefined");
          } else {
            this.newScope("assign");
            this.scopes.active.symbol_table.push({
              name: variable,
              type: "id"
            });
            this.exitScope();
          }
        }
      }
      this.numexpressions.push({
        expression: ctx.getText(),
        type: type,
        line: ctx.start.line,
        col: ctx.start.column
      });
    } else if (context === "varoratrib") {
    }
  }

  typeFromSymbolTable(entry) {
    let aux = entry;
    while (typeof aux.type === "object") {
      aux = aux.type.array;
    }
    return aux.type;
  }

  addType(ctx, type) {
    if (this.scopes.active) {
      let already_declared = this.scopes.active.symbol_table.filter(
        e => e.name === ctx.getText()
      );
      if (already_declared.length) {
        this.errors.push({
          asem2: "var per scope",
          type: "Semantic",
          symbol: `Variável '${ctx.getText()}' já foi declarada neste escopo.`,
          line: ctx.symbol.line,
          col: ctx.symbol.column
        });
      } else {
        this.scopes.active.symbol_table.push({
          name: ctx.getText(),
          type: type,
          line: ctx.symbol.line,
          col: ctx.symbol.column
        });
      }
    } else {
      this.newScope("vardecl");
      this.scopes.active.symbol_table.push({
        name: ctx.getText(),
        type: type
      });
      this.exitScope();
    }
  }

  breakLoop(ctx) {
    if (this.scopes.active) {
      if (this.scopes.active.type === "for") {
        return this.scopes.active.label_next;
      } else {
        let parent_scope = this.scopes.active.parent;
        while (parent_scope !== undefined) {
          if (parent_scope.type === "for") return parent_scope.label_next;
          parent_scope = parent_scope.parent;
        }
      }
    }
    this.errors.push({
      asem2: "break",
      type: "Semantic",
      symbol: "break fora do escopo de um comando de repetição",
      line: ctx.start.line,
      col: ctx.start.column
    });
    return "end";
  }

  newScope(type, labelNext) {
    this.scopes.id = this.scopes.id + 1;
    if (this.scopes.active) {
      let new_scope = {
        id: this.scopes.id,
        type: type,
        parent: this.scopes.active,
        label_next: labelNext,
        symbol_table: []
      };
      this.scopes.list.push(new_scope);
      this.scopes.active = new_scope;
      // console.log(`added childScope ${this.scopes.id}`);
    } else {
      let new_scope = {
        id: this.scopes.id,
        type: type,
        parent: this.scopes.active,
        label_next: labelNext,
        symbol_table: []
      };
      this.scopes.list.push(new_scope);
      this.scopes.active = new_scope;
      // console.log(`added scope ${this.scopes.id}`);
    }
  }

  exitScope() {
    if (this.scopes.active.parent) {
      // console.log(`exited childScope ${this.scopes.active.id}`);
      this.scopes.active = this.scopes.active.parent;
    } else {
      // console.log(`exited scope ${this.scopes.active.id}`);
      this.scopes.active = undefined;
    }
  }

  firstChild(ctx) {
    let first_child;
    if (ctx.children === null) {
      first_child = "epsilon";
    } else if (ctx.children[0].ruleIndex !== undefined) {
      first_child = ctx.parser.ruleNames[ctx.children[0].ruleIndex];
    } else {
      first_child = ctx.parser.symbolicNames[ctx.children[0].symbol.type];
    }
    return first_child;
  }

  visitChildren(ctx) {
    let code = "";
    for (let i = 0; i < ctx.getChildCount(); i++) {
      code += this.visit(ctx.getChild(i));
    }
    return code.trim();
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }

  visitStatement(ctx, attributes) {
    let local_attributes = {};
    let brackets = {};
    let multivardecl = {};
    switch (this.firstChild(ctx)) {
      /* STATEMENT -> int ident BRACKETS MULTIVARDECL ; */
      case "Int":
        /* BRACKETS.auxtype = int.lexval */
        brackets.auxtype = ctx.getChild(0).getText();
        brackets = this.visitBrackets(ctx.getChild(2), brackets);

        /* addType(ident.id, BRACKETS.type) */
        this.addType(ctx.getChild(1), brackets.type);

        /* MULTIVARDECL.auxtype = int.lexval */
        multivardecl.auxtype = ctx.getChild(0).getText();
        multivardecl = this.visitMultivardecl(ctx.getChild(3), multivardecl);

        /* STATEMENT.code = '' */
        return { code: "" };

      /* STATEMENT -> string ident BRACKETS MULTIVARDECL ; */
      case "String":
        /* BRACKETS.auxtype = string.lexval */
        brackets.auxtype = ctx.getChild(0).getText();
        brackets = this.visitBrackets(ctx.getChild(2), brackets);

        /* addType(ident.id, BRACKETS.type) */
        this.addType(ctx.getChild(1), brackets.type);

        /* MULTIVARDECL.auxtype = string.lexval */
        multivardecl.auxtype = ctx.getChild(0).getText();
        multivardecl = this.visitMultivardecl(ctx.getChild(3), multivardecl);

        /* STATEMENT.code = '' */
        return { code: "" };

      /* STATEMENT -> ident VARORATRIB */
      case "Identifier":
        let varoratrib = {};
        /* VARORATRIB.identaux = ident.lexval */
        varoratrib.identaux = ctx.getChild(0).getText();

        varoratrib = this.visitVaroratrib(ctx.getChild(1), varoratrib);
        /* STATEMENT.code = VARORATRIB.code */
        return { code: varoratrib.code + "\n" };

      /* STATEMENT -> PRINTSTAT ; */
      case "printstat":
        let printstat = this.visitPrintstat(ctx.getChild(0));
        /* STATEMENT.code = PRINTSTAT.code */
        return { code: printstat.code };

      /* STATEMENT -> READSTAT ; */
      case "readstat":
        let readstat = this.visitReadstat(ctx.getChild(0));
        /* STATEMENT.code = READSTAT.code */
        return { code: readstat.code };

      /* STATEMENT -> RETURNSTAT ; */
      case "returnstat":
        let returnstat = this.visitReturnstat(ctx.getChild(0));
        /* STATEMENT.code = RETURNSTAT.code */
        return { code: returnstat.code };

      /* STATEMENT -> IFSTAT */
      case "ifstat":
        /* IFSTAT.next = STATEMENT.next */
        local_attributes.next = attributes.next;
        let ifstat = this.visitIfstat(ctx.getChild(0), local_attributes);
        /* STATEMENT.code = IFSTAT.code */
        return { code: ifstat.code };

      /* STATEMENT -> FORSTAT */
      case "forstat":
        /* newScope('for', STATEMENT.next) */
        this.newScope("for", attributes.next);

        let forstat = {};
        /* FORSTAT.next = STATEMENT.next */
        forstat.next = attributes.next;
        forstat = this.visitForstat(ctx.getChild(0), forstat);

        /* exitScope() */
        this.exitScope();

        /* STATEMENT.code = FORSTAT.code */
        return { code: forstat.code };

      /* STATEMENT -> { STATLIST } */
      case "LeftBrace":
        /* newScope('statlist') */
        this.newScope("statlist");

        let statlist = {};
        /* STATLIST.next = STATEMENT.next */
        statlist.next = attributes.next;
        statlist = this.visitStatlist(ctx.getChild(1), statlist);

        /* exitScope() */
        this.exitScope();

        /* STATEMENT.code = STATLIST.code */
        return { code: statlist.code };

      /* STATEMENT -> break ; */
      case "Break":
        /* STATEMENT.code = goto label(breakLoop()) */
        return { code: `goto ${this.breakLoop(ctx)}\n` };

      /* STATEMENT -> ; */
      case "Semi":
        return { code: "" };

      default:
        return this.visit(ctx.getChild(0), attributes);
    }
  }

  visitVaroratrib(ctx, attributes) {
    switch (this.firstChild(ctx)) {
      /* VARORATRIB -> ident BRACKETS MULTIVARDECL ; */
      case "Identifier":
        let brackets = {};
        /* BRACKETS.auxtype = VARORATRIB.identaux */
        brackets.auxtype = attributes.identaux;
        brackets = this.visitBrackets(ctx.getChild(1), brackets);

        /* addType(ident.id, BRACKETS.type) */
        this.addType(ctx.getChild(0), brackets.type);

        let multivardecl = {};
        /* MULTIVARDECL.auxtype = VARORATRIB.identaux */
        multivardecl.auxtype = attributes.identaux;
        multivardecl = this.visitMultivardecl(ctx.getChild(2), multivardecl);

        /* VARORATRIB.code = '' */
        return { code: "" };

      /* VARORATRIB -> LVALUE = ATRIBSTATB ; */
      case "lvalue":
        let lvalue = {};
        /* LVALUE.codeaux = VARORATRIB.identaux */
        lvalue.codeaux = attributes.identaux;
        lvalue = this.visitLvalue(ctx.getChild(0), lvalue);

        let atribstatb = this.visitAtribstatb(ctx.getChild(2));

        return {
          /* VARORATRIB.code = ATRIBSTATB.code || LVALUE.addr '=' ATRIBSTATB.addr */
          code: `${atribstatb.code}\n` + `${lvalue.addr} = ${atribstatb.addr}`
        };
    }
  }

  /* ATRIBSTAT -> ident LVALUE = ATRIBSTATB */
  visitAtribstat(ctx) {
    let lvalue = {};
    /* LVALUE.codeaux = ident.lexval */
    lvalue.codeaux = ctx.getChild(0).getText();

    lvalue = this.visitLvalue(ctx.getChild(1), lvalue);

    let atribstatb = this.visitAtribstatb(ctx.getChild(3));

    return {
      /* ATRIBSTAT.code = ATRIBSTATB.code || LVALUE.addr '=' ATRIBSTATB.addr */
      code: `${atribstatb.code}\n` + `${lvalue.addr} = ${atribstatb.addr}`
    };
  }

  /* ATRIBSTATB -> NUMEXPRESSION */
  visitAtribstatb(ctx) {
    let numexpression = this.visitNumexpression(ctx.getChild(0));
    return {
      /* ATRIBSTATB.code = NUMEXPRESSION.code */
      code: numexpression.code,
      /* ATRIBSTATB.addr = NUMEXPRESSION.addr */
      addr: numexpression.addr
    };
  }

  /* PRINTSTAT -> print NUMEXPRESSION */
  visitPrintstat(ctx) {
    let numexpression = this.visitNumexpression(ctx.getChild(1));

    /* PRINTSTAT.code = NUMEXPRESSION.code || out || NUMEXPRESSION.addr */
    return { code: `${numexpression.code}\nout ${numexpression.addr}` };
  }

  /* READSTAT -> read ident LVALUE */
  visitReadstat(ctx) {
    let lvalue = {};
    /* LVALUE.codeaux = ident.lexval */
    lvalue.codeaux = ctx.getChild(1).getText();

    lvalue = this.visitLvalue(ctx.getChild(2), lvalue);

    /* READSTAT.code = in || LVALUE.addr */
    return { code: `in ${lvalue.addr}` };
  }

  /* RETURNSTAT -> return RETURNSTATB */
  visitReturnstat(ctx) {
    return { code: "goto end" };
  }

  visitIfstat(ctx, attributes) {
    let local_attributes = {};
    let numexpression, statement, code;

    switch (this.firstChild(ctx)) {
      /* IFSTAT -> if ( NUMEXPRESSION ) STATEMENT */
      case "If":
        numexpression = this.visitNumexpression(ctx.getChild(2));

        /* newScope('if') */
        this.newScope("if");
        /* STATEMENT.next = IFSTAT.next */
        local_attributes.next = attributes.next;
        statement = this.visitStatement(ctx.getChild(4), local_attributes);
        /* exitScope() */
        this.exitScope();

        /* IFSTAT.true = newLabel() */
        attributes.true = this.newLabel();
        /* IFSTAT.false = IFSTAT.next */
        attributes.false = attributes.next;
        /* IFSTAT.code = NUMEXPRESSION.code 
                           || if NUMEXPRESSION.addr goto IFSTAT.true
                           || goto label(IFSTAT.false)
                           || label(IFSTAT.true)
                           || STATEMENT.code */
        code = [
          numexpression.code,
          `if ${numexpression.addr} goto ${attributes.true}`,
          `goto ${attributes.false}`,
          `${attributes.true}:`,
          `${statement.code}\n`
        ].join("\n");

        return {
          code: code
        };

      /* IFSTAT -> ife ( NUMEXPRESSION ) STATEMENT else STATEMENT */
      case "Ife":
        numexpression = this.visitNumexpression(ctx.getChild(2));

        /* newScope('if') */
        this.newScope("if");
        statement = [];
        /* STATEMENT₁.next = IFSTAT.next */
        local_attributes.next = attributes.next;
        statement[1] = this.visitStatement(ctx.getChild(4), local_attributes);
        /* exitScope() */
        this.exitScope();

        /* newScope('else') */
        this.newScope("else");
        local_attributes = {};
        /* STATEMENT₂.next = IFSTAT.next */
        local_attributes.next = attributes.next;
        statement[2] = this.visitStatement(ctx.getChild(6), local_attributes);
        /* exitScope() */
        this.exitScope();

        /* IFSTAT.true = newLabel() */
        attributes.true = this.newLabel();
        /* IFSTAT.false = newLabel() */
        attributes.false = this.newLabel();
        /* IFSTAT.code = NUMEXPRESSION.code
                          || if NUMEXPRESSION.addr goto IFSTAT.true
                          || goto label(IFSTAT.false)
                          || label(IFSTAT.true)
                          || STATEMENT₁.code
                          || label(IFSTAT.false)
                          || STATEMENT₂.code */
        code = [
          numexpression.code,
          `if ${numexpression.addr} goto ${attributes.true}`,
          `goto ${attributes.false}`,
          `${attributes.true}:`,
          `${statement[1].code}`,
          `${attributes.false}:`,
          `${statement[2].code}\n`
        ].join("\n");

        return {
          code: code
        };
    }
  }
  /* FORSTAT -> for ( ATRIBSTAT₁ ; NUMEXPRESSION ; ATRIBSTAT₂ ) STATEMENT */
  visitForstat(ctx, attributes) {
    let atribstat1 = {};
    let numexpression = {};
    let atribstat2 = {};
    let statement = {};

    /* FORSTAT.begin = newLabel() */
    attributes.begin = this.newLabel();
    /* FORSTAT.increment = newLabel() */
    attributes.increment = this.newLabel();
    /* FORSTAT.true = newLabel() */
    attributes.true = this.newLabel();
    /* FORSTAT.false = FORSTAT.next */
    attributes.false = attributes.next;

    atribstat1 = this.visitAtribstat(ctx.getChild(2));

    numexpression = this.visitNumexpression(ctx.getChild(4));

    atribstat2 = this.visitAtribstat(ctx.getChild(6));

    /* STATEMENT.next = FORSTAT.increment */
    statement.next = attributes.increment;
    statement = this.visitStatement(ctx.getChild(8), statement);

    /* FORSTAT.code = ATRIBSTAT₁.code
                      || goto label(FORSTAT.begin)
                      || label(FORSTAT.increment)
                      || ATRIBSTAT₂.code
                      || label(FORSTAT.begin)
                      || NUMEXPRESSION.code
                      || if NUMEXPRESSION.addr goto label(FORSTAT.true)
                      || goto label(FORSTAT.false)
                      || label(FORSTAT.true)
                      || STATEMENT.code
                      || goto label(FORSTAT.increment) */
    let code = [
      atribstat1.code,
      `goto ${attributes.begin}`,
      `${attributes.increment}:`,
      atribstat2.code,
      `${attributes.begin}:`,
      numexpression.code,
      `if ${numexpression.addr} goto ${attributes.true}`,
      `goto ${attributes.false}`,
      `${attributes.true}:`,
      statement.code,
      `goto ${attributes.increment}\n`
    ].join("\n");

    return { code: code };
  }

  /* STATLIST -> STATEMENT STATLISTB */
  visitStatlist(ctx, attributes) {
    let statement = {};
    /* STATEMENT.next = newLabel() */
    let statementNext = this.newLabel();
    statement.next = statementNext;

    statement = this.visitStatement(ctx.getChild(0), statement);

    let statlistb = {};
    /* STATLISTB.next = STATLIST.next */
    statlistb.next = attributes.next;
    statlistb = this.visitStatlistb(ctx.getChild(1), statlistb);

    return {
      /* STATLIST.code = STATEMENT.code || STATEMENT.next || STATLISTB.code */
      code:
        `${statement.code}\n` + `${statementNext}:\n` + `${statlistb.code}\n`
    };
  }

  visitStatlistb(ctx, attributes) {
    switch (this.firstChild(ctx)) {
      /* STATLISTB -> STATLIST */
      case "statlist":
        let statlist = {};
        /* STATLIST.next = STATLISTB.next */
        statlist.next = attributes.next;
        statlist = this.visitStatlist(ctx.getChild(0), attributes);
        /* STATLISTB.code = STATLIST.code */
        return { code: statlist.code };

      /* STATLISTB -> 𝝐 */
      default:
        /* STATLISTB.code = '' */
        return { code: "" };
    }
  }

  visitBrackets(ctx, attributes) {
    switch (this.firstChild(ctx)) {
      /* BRACKETS -> [ int-constant ] BRACKETS₁ */
      case "LeftBracket":
        let brackets = {};
        /* BRACKETS₁.auxtype = BRACKETS.auxtype */
        brackets.auxtype = attributes.auxtype;
        brackets = this.visitBrackets(ctx.getChild(3), brackets);

        return {
          /* BRACKETS.type = array( int-constant.lexval,  BRACKETS₁.type) */
          type: { array: { n: ctx.getChild(1).getText(), type: brackets.type } }
        };

      /* BRACKETS -> 𝝐 */
      default:
        /* BRACKETS.type = BRACKETS.auxtype */
        return { type: attributes.auxtype };
    }
  }

  visitMultivardecl(ctx, attributes) {
    switch (this.firstChild(ctx)) {
      /* MULTIVARDECL -> VARDECLCOMMA MULTIVARDECL₁ */
      case "vardeclcomma":
        let vardeclcomma = {};
        /* VARDECLCOMMA.auxtype = MULTIVARDECL.auxtype */
        vardeclcomma.auxtype = attributes.auxtype;
        vardeclcomma = this.visitVardeclcomma(ctx.getChild(0), vardeclcomma);

        let multivardecl = {};
        /* MULTIVARDECL₁.auxtype = MULTIVARDECL.auxtype */
        multivardecl.auxtype = attributes.auxtype;
        multivardecl = this.visitMultivardecl(ctx.getChild(1), multivardecl);

      /* MULTIVARDECL -> 𝝐 */
      default:
        return;
    }
  }
  /* VARDECLCOMMA -> , ident BRACKETS */
  visitVardeclcomma(ctx, attributes) {
    let brackets = {};
    /* BRACKETS.auxtype = VARDECLCOMMA.auxtype */
    brackets.auxtype = attributes.auxtype;
    brackets = this.visitBrackets(ctx.getChild(2), brackets);

    /* addType(ident.id, BRACKETS.type) */
    this.addType(ctx.getChild(1), brackets.type);
  }

  /* NUMEXPRESSION -> TERM TERMS */
  visitNumexpression(ctx) {
    let local_attributes = {};
    let term = this.visitTerm(ctx.getChild(0));
    /* TERMS.inha = TERM.addr */
    local_attributes.inha = term.addr;
    /* TERMS.inhc = TERM.code */
    local_attributes.inhc = term.code;
    let terms = this.visitTerms(ctx.getChild(1), local_attributes);
    /* checkType() */
    this.checkType(ctx);
    return {
      /* NUMEXPRESSION.addr = TERMS.addr */
      addr: terms.addr,
      /* NUMEXPRESSION.code = TERMS.code */
      code: terms.code
    };
  }

  /* TERM -> UNARYEXPR UNARYEXPRS */
  visitTerm(ctx) {
    let local_attributes = {};
    let unaryExpr = this.visitUnaryexpr(ctx.getChild(0));
    /* UNARYEXPRS.inha = UNARYEXPR.addr */
    local_attributes.inha = unaryExpr.addr;
    /* UNARYEXPRS.inhc = UNARYEXPR.code */
    local_attributes.inhc = unaryExpr.code;
    let unaryExprs = this.visitUnaryexprs(ctx.getChild(1), local_attributes);
    return {
      /* TERM.addr = UNARYEXPRS.addr */
      addr: unaryExprs.addr,
      /* TERM.code = UNARYEXPRS.code */
      code: unaryExprs.code
    };
  }

  visitTerms(ctx, attributes) {
    let local_attributes = {};
    let term, terms;
    switch (this.firstChild(ctx)) {
      /* TERMS -> + TERM TERMS */
      case "Plus":
        term = this.visitTerm(ctx.getChild(1));

        /* TERMS.addr = newTemporary() */
        attributes.addr = this.newTemporary();

        /* TERMS₁.inha = TERMS.addr */
        local_attributes.inha = attributes.addr;
        /* TERMS₁.inhc = TERMS.inhc
                         || TERM.code
                         || TERMS.addr '=' TERMS.inha '+' TERM.addr */
        local_attributes.inhc =
          `${attributes.inhc}\n` +
          `${term.code}\n` +
          `${attributes.addr} = ${attributes.inha} + ${term.addr}`;

        terms = this.visitTerms(ctx.getChild(2), local_attributes);

        return {
          /* TERMS.code = TERMS₁.code */
          code: terms.code,
          /* TERMS.addr = TERMS₁.addr */
          addr: terms.addr
        };

      /* TERMS -> - TERM TERMS */
      case "Minus":
        term = this.visitTerm(ctx.getChild(1));

        /* TERMS.addr = newTemporary() */
        attributes.addr = this.newTemporary();
        /* TERMS₁.inha = TERMS.addr */
        local_attributes.inha = attributes.addr;
        /* TERMS₁.inhc = TERMS.inhc
                         || TERM.code
                         || TERMS.addr '=' TERMS.inha '-' TERM.addr */
        local_attributes.inhc =
          `${attributes.inhc}\n` +
          `${term.code}\n` +
          `${attributes.addr} = ${attributes.inha} - ${term.addr}`;

        terms = this.visitTerms(ctx.getChild(2), local_attributes);

        return {
          /* TERMS.code = TERMS₁.code */
          code: terms.code,
          /* TERMS.addr = TERMS₁.addr */
          addr: terms.addr
        };

      /* TERMS -> 𝝐 */
      default:
        return {
          /* TERMS.addr = TERMS.inha */
          addr: attributes.inha,
          /* TERMS.code = TERMS.inhc */
          code: attributes.inhc
        };
    }
  }

  visitUnaryexpr(ctx) {
    let factor;
    switch (this.firstChild(ctx)) {
      /* UNARYEXPR -> - FACTOR */
      case "Minus":
        factor = this.visitFactor(ctx.getChild(1));

        let address = this.newTemporary();
        return {
          /* UNARYEXPR.addr = newTemporary() */
          addr: address,
          /* UNARYEXPR.code = UNARYEXPR.addr '=' minus FACTOR.addr */
          code: `${address} = minus ${factor.addr}`
        };

      /* UNARYEXPR -> + FACTOR */
      case "Plus":
        factor = this.visitFactor(ctx.getChild(1));
        return {
          /* UNARYEXPR.addr = FACTOR.addr */
          addr: factor.addr,
          /* UNARYEXPR.code = FACTOR.code */
          code: factor.code
        };

      /* UNARYEXPR -> FACTOR */
      case "factor":
        factor = this.visitFactor(ctx.getChild(0));
        return {
          /* UNARYEXPR.addr = FACTOR.addr */
          addr: factor.addr,
          /* UNARYEXPR.code = FACTOR.code */
          code: factor.code
        };
    }
  }

  visitUnaryexprs(ctx, attributes) {
    let local_attributes = {};
    let unaryExpr, unaryExprs;
    switch (this.firstChild(ctx)) {
      /* UNARYEXPRS -> * UNARYEXPR UNARYEXPRS₁ */
      case "Star":
        unaryExpr = this.visitUnaryexpr(ctx.getChild(1));

        /* UNARYEXPRS.addr = newTemporary() */
        attributes.addr = this.newTemporary();
        /* UNARYEXPRS₁.inha = UNARYEXPRS.addr */
        local_attributes.inha = attributes.addr;
        /* UNARYEXPRS₁.inhc = UNARYEXPRS.inhc 
                              || UNARYEXPR.code
                              || UNARYEXPRS.addr '=' UNARYEXPRS.inha '*' UNARYEXPR.addr */
        local_attributes.inhc =
          `${attributes.inhc}` +
          `${unaryExpr.code}\n` +
          `${attributes.addr} = ${attributes.inha} * ${unaryExpr.addr}`;

        unaryExprs = this.visitUnaryexprs(ctx.getChild(2), local_attributes);

        return {
          /* UNARYEXPRS.addr = UNARYEXPRS₁.addr */
          addr: unaryExprs.addr,
          /* UNARYEXPRS.code = UNARYEXPRS₁.code */
          code: unaryExprs.code
        };

      /* UNARYEXPRS -> / UNARYEXPR UNARYEXPRS₁ */
      case "Div":
        unaryExpr = this.visitUnaryexpr(ctx.getChild(1));

        /* UNARYEXPRS.addr = newTemporary() */
        attributes.addr = this.newTemporary();
        /* UNARYEXPRS₁.inha = UNARYEXPRS.addr */
        local_attributes.inha = attributes.addr;
        /* UNARYEXPRS₁.inhc = UNARYEXPRS.inhc 
                              || UNARYEXPR.code
                              || UNARYEXPRS.addr '=' UNARYEXPRS.inha '/' UNARYEXPR.addr */
        local_attributes.inhc =
          `${attributes.inhc}` +
          `${unaryExpr.code}\n` +
          `${attributes.addr} = ${attributes.inha} / ${unaryExpr.addr}`;
        unaryExprs = this.visitUnaryexprs(ctx.getChild(2), local_attributes);

        return {
          /* UNARYEXPRS.addr = UNARYEXPRS₁.addr */
          addr: unaryExprs.addr,
          /* UNARYEXPRS.code = UNARYEXPRS₁.code */
          code: unaryExprs.code
        };

      /* UNARYEXPRS -> % UNARYEXPR UNARYEXPRS₁ */
      case "Mod":
        unaryExpr = this.visitUnaryexpr(ctx.getChild(1));

        /* UNARYEXPRS.addr = newTemporary() */
        attributes.addr = this.newTemporary();
        /* UNARYEXPRS₁.inha = UNARYEXPRS.addr */
        local_attributes.inha = attributes.addr;
        /* UNARYEXPRS₁.inhc = UNARYEXPRS.inhc 
                              || UNARYEXPR.code
                              || UNARYEXPRS.addr '=' UNARYEXPRS.inha '%' UNARYEXPR.addr */
        local_attributes.inhc =
          `${attributes.inhc}` +
          `${unaryExpr.code}\n` +
          `${attributes.addr} = ${attributes.inha} % ${unaryExpr.addr}`;
        unaryExprs = this.visitUnaryexprs(ctx.getChild(2), local_attributes);

        return {
          /* UNARYEXPRS.addr = UNARYEXPRS₁.addr */
          addr: unaryExprs.addr,
          /* UNARYEXPRS.code = UNARYEXPRS₁.code */
          code: unaryExprs.code
        };

      /* UNARYEXPRS -> 𝝐 */
      default:
        return {
          /* UNARYEXPRS.addr = UNARYEXPRS.inha */
          addr: attributes.inha,
          /* UNARYEXPRS.code = UNARYEXPRS.inhc */
          code: attributes.inhc
        };
    }
  }

  visitFactor(ctx) {
    switch (this.firstChild(ctx)) {
      /* FACTOR -> int-constant */
      case "IntConstant":
        return { addr: ctx.getText(), code: "" };

      /* FACTOR -> string-constant */
      case "StringConstant":
        return { addr: ctx.getText(), code: "" };

      /* FACTOR -> null */
      case "Null":
        return { addr: ctx.getText(), code: "" };

      /* FACTOR -> ident LVALUE */
      case "Identifier":
        let local_attributes = {};

        local_attributes.codeaux = ctx.getChild(0).getText();

        let lvalue = this.visitLvalue(ctx.getChild(1), local_attributes);

        /**
         *  if( LVALUE.addr.has('[') || LVALUE.addr.has('.'))
         *    FACTOR.addr = newTemporary()
         *    FACTOR.code = FACTOR.addr '=' LVALUE.addr
         *  else
         *    FACTOR.addr = LVALUE.addr
         *    FACTOR.code = ''
         */
        if (lvalue.addr.includes("[") || lvalue.addr.includes(".")) {
          /* FACTOR.addr = newTemporary() */
          let addr = this.newTemporary();
          return {
            addr: addr,
            /* FACTOR.code = FACTOR.addr '=' LVALUE.addr */
            code: `${addr} = ${lvalue.addr}`
          };
        } else {
          return {
            /* FACTOR.addr = LVALUE.addr*/
            addr: lvalue.addr,
            /* FACTOR.code = '' */
            code: ""
          };
        }

      /* FACTOR -> ( NUMEXPRESSION ) */
      case "LeftParen":
        let numexpression = this.visitNumexpression(ctx.getChild(1));

        return {
          /* FACTOR.addr = NUMEXPRESSION.addr */
          addr: numexpression.addr,
          /* FACTOR.code = NUMEXPRESSION.code */
          code: numexpression.code
        };
    }
  }

  visitLvalue(ctx, attributes) {
    let local_attributes = {};
    switch (this.firstChild(ctx)) {
      /* LVALUE -> [ int-constant ] LVALUE₁ */
      case "LeftBracket":
        /* LVALUE₁.codeaux = LVALUE.codeaux || '[' int-constant.lexval ']' */
        local_attributes.codeaux =
          attributes.codeaux + `[${ctx.getChild(1).getText()}]`;

        let lvalue = this.visitLvalue(ctx.getChild(3), local_attributes);

        /* LVALUE.addr = LVALUE₁.addr */
        return { addr: lvalue.addr };

      /* LVALUE -> . ident LVALUEB */
      case "Dot":
        /* LVALUEB.codeaux = LVALUE.codeaux || '.' ident.lexval */
        local_attributes.codeaux =
          attributes.codeaux + `.${ctx.getChild(1).getText()}`;

        let lvalueb = this.visitLvalueb(ctx.getChild(2), local_attributes);

        /* LVALUE.addr = LVALUEB.addr */
        return { addr: lvalueb.addr };

      default:
        /* LVALUE.addr = LVALUE.codeaux */
        return { addr: attributes.codeaux };
    }
  }

  visitLvalueb(ctx, attributes) {
    let local_attributes = {};
    let lvalue;
    switch (this.firstChild(ctx)) {
      /* LVALUEB -> ( int-constant ) LVALUE */
      case "LeftParen":
        /* LVALUE.codeaux = LVALUEB.codeaux || '(' int-constant.lexval ')'  */
        local_attributes.codeaux =
          attributes.codeaux + `(${ctx.getChild(1).getText()})`;

        lvalue = this.visitLvalue(ctx.getChild(3), local_attributes);

        /* LVALUEB.addr = LVALUE.addr */
        return { addr: lvalue.addr };

      /* LVALUEB -> LVALUE */
      case "lvalue":
        /* LVALUE.codeaux = LVALUEB.codeaux */
        local_attributes.codeaux = attributes.codeaux;

        lvalue = this.visitLvalue(ctx.getChild(0), local_attributes);

        /* LVALUEB.addr = LVALUE.addr */
        return { addr: lvalue.addr };
    }
  }
}

module.exports = Visitor;
