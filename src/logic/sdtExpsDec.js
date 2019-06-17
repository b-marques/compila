export default function addActionsToProds(head, production) {
  let new_production = production_to_object(production);
  switch (head.name) {
    case "PROGRAM":
      if (is_equal(production, ["EXPS", ";", "DEC"])) {
        // Insert Synthesize.EXPS into position 1
        new_production.splice(1, 0, {
          name: "Synthesize.EXPS",
          actions(stack) {
            /* PROGRAM.node = EXPS.node */
            stack[stack.length - 3].node = this.node;
          }
        });
      }
      break;

    case "EXPS":
      if (is_equal(production, ["NUMEXPRESSION"])) {
        new_production.push({
          name: "Synthesize.NUMEXPRESSION",
          actions(stack) {
            /* EXPS.node = NUMEXPRESSION.node */
            stack[stack.length - 1].node = this.node;
          }
        });
      }
      break;

    case "DEC":
      break;

    case "TYPE":
      if (is_equal(production, ["int"])) {
        new_production[0] = {
          name: "int",
          actions(stack, lexval) {
            /* TYPE.type = int.lexval */
            stack[stack.length - 1].type = lexval;
          }
        };
      }
      if (is_equal(production, ["string"])) {
        new_production[0] = {
          name: "string",
          actions(stack, lexval) {
            /* TYPE.type = string.lexval */
            stack[stack.length - 1].type = lexval;
          }
        };
      }
      if (is_equal(production, ["ident"])) {
        new_production[0] = {
          name: "ident",
          actions(stack, lexval) {
            /* TYPE.type = ident.lexval */
            stack[stack.length - 1].type = lexval;
          }
        };
      }
      break;

    case "VARDECL":
      if (is_equal(production, ["TYPE", "ident", "BRACKETS", "MULTIVARDECL"])) {
        new_production.splice(1, 0, {
          name: "Synthesize.TYPE",
          actions(stack) {
            /* BRACKETS.auxtype = TYPE.type */
            stack[stack.length - 2].auxtype = this.type;
            /* MULTIVARDECL.auxtype = TYPE.type */
            stack[stack.length - 4].auxtype = this.type;
          }
        });
        new_production[2] = {
          name: "ident",
          actions(stack, lexval) {
            /* Send id to Synthesize.BRACKETS to call addType() */
            stack[stack.length - 2].ident = lexval;
          }
        };
        new_production.splice(4, 0, {
          name: "Synthesize.BRACKETS",
          actions(stack, decl_table) {
            /* addType(ident.id, BRACKETS.type) */
            decl_table.push({ id: this.ident, type: this.type });
          }
        });
      }
      break;

    case "BRACKETS":
      if (is_equal(production, ["[", "int-constant", "]", "BRACKETS"])) {
        new_production[1] = {
          name: "int-constant",
          actions(stack, lexval) {
            /* Send lexval to Synthesize.BRACKETS to call array() */
            stack[stack.length - 3].lexval = lexval;
          }
        };
        new_production[3] = {
          name: "BRACKETS",
          /* BRACKETS₁.auxtype = BRACKETS.auxtype */
          auxtype: head.auxtype
        };
        new_production.push({
          name: "Synthesize.BRACKETS",
          actions(stack, decl_table) {
            /* BRACKETS.type = array( int-constant.lexval,  BRACKETS₁.type) */
            stack[stack.length - 1].type = {
              array: { n: this.lexval, type: this.type }
            };
          }
        });
      }
      if (is_equal(production, ["&"])) {
        new_production = [
          {
            name: "&",
            auxtype: head.auxtype,
            actions(stack) {
              /* BRACKETS.type = BRACKETS.auxtype */
              stack[stack.length - 1].type = this.auxtype;
            }
          }
        ];
      }
      break;

    case "MULTIVARDECL":
      if (is_equal(production, ["VARDECLCOMMA", "MULTIVARDECL"])) {
        new_production[0] = {
          name: "VARDECLCOMMA",
          /* VARDECLCOMMA.auxtype = MULTIVARDECL.auxtype */
          auxtype: head.auxtype
        };
        new_production[1] = {
          name: "MULTIVARDECL",
          /* MULTIVARDECL₁.auxtype = MULTIVARDECL.auxtype */
          auxtype: head.auxtype
        };
      }
      break;

    case "VARDECLCOMMA":
      if (is_equal(production, [",", "ident", "BRACKETS"])) {
        new_production[1] = {
          name: "ident",
          actions(stack, lexval) {
            /* Send id to Synthesize.BRACKETS to call addType() */
            stack[stack.length - 2].ident = lexval;
          }
        };
        new_production[2] = {
          name: "BRACKETS",
          /* BRACKETS.auxtype = VARDECLCOMMA.auxtype */
          auxtype: head.auxtype
        };
        new_production.push({
          name: "Synthesize.BRACKETS",
          actions(stack, decl_table) {
            /* addType(ident.id, BRACKETS.type) */
            decl_table.push({ id: this.ident, type: this.type });
          }
        });
      }
      break;

    case "LVALUE":
      if (is_equal(production, ["[", "int-constant", "]", "LVALUE"])) {
        new_production[0] = {
          name: "[",
          /* LVALUE₁.codeaux = LVALUE.codeaux || '[' int-constant.lexval ']' */
          codeaux: head.codeaux,
          actions(stack, lexval) {
            /* LVALUE₁.codeaux = LVALUE.codeaux || '[' int-constant.lexval ']' */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
        new_production[1] = {
          name: "int-constant",
          actions(stack, lexval) {
            /* LVALUE₁.codeaux = LVALUE.codeaux || '[' int-constant.lexval ']' */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
        new_production[2] = {
          name: "]",
          actions(stack, lexval) {
            /* LVALUE₁.codeaux = LVALUE.codeaux || '[' int-constant.lexval ']' */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
        new_production.push({
          name: "Synthesize.LVALUE",
          syn: "",
          actions(stack) {
            /* LVALUE.code = LVALUE₁.code */
            stack[stack.length - 1].code = this.code;
          }
        });
      }
      if (is_equal(production, [".", "ident", "LVALUEB"])) {
        new_production[0] = {
          name: ".",
          /* LVALUEB.codeaux = LVALUE.codeaux || '.' ident.lexval */
          codeaux: head.codeaux,
          actions(stack, lexval) {
            /* LVALUEB.codeaux = LVALUE.codeaux || '.' ident.lexval */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
        new_production[1] = {
          name: "ident",
          actions(stack, lexval) {
            /* LVALUEB.codeaux = LVALUE.codeaux || '.' ident.lexval */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
      }
      if (is_equal(production, ["&"])) {
        new_production = [
          {
            name: "&",
            codeaux: head.codeaux,
            actions(stack) {
              /* LVALUE.code = LVALUE.codeaux */
              stack[stack.length - 1].code = this.codeaux;
            }
          }
        ];
      }
      break;

    case "LVALUEB":
      if (is_equal(production, ["(", "int-constant", ")", "LVALUE"])) {
        new_production[0] = {
          name: "(",
          /* LVALUE.codeaux = LVALUEB.codeaux || '(' int-constant.lexval ')' */
          codeaux: head.codeaux,
          actions(stack, lexval) {
            /* LVALUE.codeaux = LVALUEB.codeaux || '(' int-constant.lexval ')' */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
        new_production[1] = {
          name: "int-constant",
          actions(stack, lexval) {
            /* LVALUE.codeaux = LVALUEB.codeaux || '(' int-constant.lexval ')' */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
        new_production[2] = {
          name: ")",
          actions(stack, lexval) {
            /* LVALUE.codeaux = LVALUEB.codeaux || '(' int-constant.lexval ')' */
            stack[stack.length - 1].codeaux = this.codeaux + lexval;
          }
        };
        new_production.push({
          name: "Synthesize.LVALUE",
          actions(stack) {
            /* LVALUE.code = LVALUE₁.code */
            stack[stack.length - 1].code = this.code;
          }
        });
      }
      if (is_equal(production, ["LVALUE"])) {
        new_production = [
          {
            name: "LVALUE",
            /* LVALUE.codeaux = LVALUEB.codeaux */
            codeaux: head.codeaux
          }
        ];
      }
      break;

    case "NUMEXPRESSION":
      if (is_equal(production, ["TERM", "TERMS"])) {
        new_production.splice(1, 0, {
          name: "Synthesize.TERM",
          actions(stack) {
            /* TERMS.inh = TERM.node */
            stack[stack.length - 1].inh = this.node;
          }
        });
        new_production.push({
          name: "Synthesize.TERMS",
          actions(stack) {
            /* NUMEXPRESSION.node = TERMS.syn */
            stack[stack.length - 1].node = this.syn;
          }
        });
      }
      break;

    case "TERMS":
      if (is_equal(production, ["+", "TERM", "TERMS"])) {
        /* TERMS₁.inh = new Node('+', TERMS.inh, TERM.node) */
        new_production[2].inh = { value: "+", left: head.inh, right: "" };
        new_production.splice(2, 0, {
          name: "Synthesize.TERM",
          actions(stack) {
            /* TERMS₁.inh = new Node('+', TERMS.inh, TERM.node) */
            stack[stack.length - 1].inh.right = this.node;
          }
        });
        new_production.push({
          name: "Synthesize.TERMS",
          actions(stack) {
            /* TERMS.syn = TERMS₁.syn */
            stack[stack.length - 1].syn = this.syn;
          }
        });
      }
      if (is_equal(production, ["-", "TERM", "TERMS"])) {
        /* TERMS₁.inh = new Node('-', TERMS.inh, TERM.node) */
        new_production[2].inh = { value: "-", left: head.inh, right: "" };
        new_production.splice(2, 0, {
          name: "Synthesize.TERM",
          actions(stack) {
            /* TERMS₁.inh = new Node('-', TERMS.inh, TERM.node) */
            stack[stack.length - 1].inh.right = this.node;
          }
        });
        new_production.push({
          name: "Synthesize.TERMS",
          actions(stack) {
            /* TERMS.syn = TERMS₁.syn */
            stack[stack.length - 1].syn = this.syn;
          }
        });
      }
      if (is_equal(production, ["&"])) {
        new_production = [
          {
            name: "&",
            inh: head.inh,
            actions(stack) {
              /* TERMS.syn = TERMS.inh */
              stack[stack.length - 1].syn = this.inh;
            }
          }
        ];
      }
      break;

    case "TERM":
      if (is_equal(production, ["UNARYEXPR", "UNARYEXPRS"])) {
        new_production.splice(1, 0, {
          name: "Synthesize.UNARYEXPR",
          actions(stack) {
            /* UNARYEXPRS.inh = UNARYEXPR.node */
            stack[stack.length - 1].inh = this.node;
          }
        });
        new_production.push({
          name: "Synthesize.UNARYEXPRS",
          actions(stack) {
            /* TERM.node = UNARYEXPRS.syn */
            stack[stack.length - 1].node = this.syn;
          }
        });
      }
      break;

    case "UNARYEXPRS":
      if (is_equal(production, ["*", "UNARYEXPR", "UNARYEXPRS"])) {
        /* UNARYEXPRS₁.inh = new Node('*', UNARYEXPRS.inh, UNARYEXPR.node) */
        new_production[2].inh = { value: "*", left: head.inh, right: "" };
        new_production.splice(2, 0, {
          name: "Synthesize.UNARYEXPR",
          actions(stack) {
            /* UNARYEXPRS₁.inh = new Node('*', UNARYEXPRS.inh, UNARYEXPR.node) */
            stack[stack.length - 1].inh.right = this.node;
          }
        });
        new_production.push({
          name: "Synthesize.UNARYEXPRS",
          actions(stack) {
            /* UNARYEXPRS.syn = UNARYEXPRS₁.syn */
            stack[stack.length - 1].syn = this.syn;
          }
        });
      }
      if (is_equal(production, ["/", "UNARYEXPR", "UNARYEXPRS"])) {
        /* UNARYEXPRS₁.inh = new Node('/', UNARYEXPRS.inh, UNARYEXPR.node) */
        new_production[2].inh = { value: "/", left: head.inh, right: "" };
        new_production.splice(2, 0, {
          name: "Synthesize.UNARYEXPR",
          actions(stack) {
            /* UNARYEXPRS₁.inh = new Node('/', UNARYEXPRS.inh, UNARYEXPR.node) */
            stack[stack.length - 1].inh.right = this.node;
          }
        });
        new_production.push({
          name: "Synthesize.UNARYEXPRS",
          actions(stack) {
            /* UNARYEXPRS.syn = UNARYEXPRS₁.syn */
            stack[stack.length - 1].syn = this.syn;
          }
        });
      }
      if (is_equal(production, ["%", "UNARYEXPR", "UNARYEXPRS"])) {
        /* UNARYEXPRS₁.inh = new Node('%', UNARYEXPRS.inh, UNARYEXPR.node) */
        new_production[2].inh = { value: "%", left: head.inh, right: "" };
        new_production.splice(2, 0, {
          name: "Synthesize.UNARYEXPR",
          actions(stack) {
            /* UNARYEXPRS₁.inh = new Node('%', UNARYEXPRS.inh, UNARYEXPR.node) */
            stack[stack.length - 1].inh.right = this.node;
          }
        });
        new_production.push({
          name: "Synthesize.UNARYEXPRS",
          actions(stack) {
            /* UNARYEXPRS.syn = UNARYEXPRS₁.syn */
            stack[stack.length - 1].syn = this.syn;
          }
        });
      }
      if (is_equal(production, ["&"])) {
        new_production = [
          {
            name: "&",
            inh: head.inh,
            actions(stack) {
              /* UNARYEXPRS.syn = UNARYEXPRS.inh */
              stack[stack.length - 1].syn = this.inh;
            }
          }
        ];
      }
      break;

    case "UNARYEXPR":
      if (is_equal(production, ["FACTOR"])) {
        new_production.push({
          name: "Synthesize.FACTOR",
          actions(stack) {
            /* UNARYEXPR.node = FACTOR.syn */
            stack[stack.length - 1].node = this.syn;
          }
        });
      }
      if (is_equal(production, ["-", "FACTOR"])) {
        new_production.push({
          name: "Synthesize.FACTOR",
          actions(stack) {
            /* UNARYEXPR.node = - FACTOR.syn */
            stack[stack.length - 1].node = { value: "minus", center: this.syn };
          }
        });
      }
      if (is_equal(production, ["+", "FACTOR"])) {
        new_production.push({
          name: "Synthesize.FACTOR",
          actions(stack) {
            /* UNARYEXPR.node = + FACTOR.syn */
            stack[stack.length - 1].node = this.syn;
          }
        });
      }
      break;

    case "FACTOR":
      if (is_equal(production, ["int-constant"])) {
        new_production[0].actions = (stack, lexval) => {
          /* FACTOR.syn = new Leaf(int-constant.lexval) */
          stack[stack.length - 1].syn = { value: lexval };
        };
      }
      if (is_equal(production, ["string-constant"])) {
        new_production[0].actions = (stack, lexval) => {
          /* FACTOR.syn = new Leaf(string-constant.lexval) */
          stack[stack.length - 1].syn = { value: lexval };
        };
      }
      if (is_equal(production, ["null"])) {
        new_production[0].actions = (stack, lexval) => {
          /* FACTOR.syn = new Leaf(null.lexval) */
          stack[stack.length - 1].syn = { value: lexval };
        };
      }
      if (is_equal(production, ["ident", "LVALUE"])) {
        new_production[0].actions = (stack, lexval) => {
          /* FACTOR.syn = new Leaf(LVALUE.code) */
          stack[stack.length - 1].codeaux = lexval;
        };
        new_production.push({
          name: "Synthesize.LVALUE",
          actions(stack) {
            /* FACTOR.syn = new Leaf(LVALUE.code) */
            stack[stack.length - 1].syn = { value: this.code };
          }
        });
      }
      if (is_equal(production, ["(", "NUMEXPRESSION", ")"])) {
        new_production.splice(2, 0, {
          name: "Synthesize.NUMEXPRESSION",
          actions(stack) {
            /* FACTOR.syn = NUMEXPRESSION.node */
            stack[stack.length - 2].syn = this.node;
          }
        });
      }
      break;

    default:
      console.log(
        "Something went wrong when adding actions to build syntax tree."
      );
      break;
  }
  return new_production;
}

function is_equal(as, bs) {
  if (as.length !== bs.length) return false;
  for (var a in as) if (as[a] !== bs[a]) return false;
  return true;
}

function production_to_object(production) {
  let objectified_production = [];
  for (let prod of production) {
    objectified_production.push({ name: prod });
  }
  return objectified_production;
}
