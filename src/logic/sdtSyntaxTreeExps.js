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
      break;

    case "VARDECL":
      break;

    case "BRACKETS":
      break;

    case "MULTIVARDECL":
      break;

    case "VARDECLCOMMA":
      break;

    case "LVALUE":
      if (is_equal(production, ["[", "int-constant", "]", "LVALUE"])) {
        new_production[0] = {
          name: "[",
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
            this.syn.value = "-" + this.syn.value;
            stack[stack.length - 1].node = this.syn;
          }
        });
      }
      if (is_equal(production, ["+", "FACTOR"])) {
        new_production.push({
          name: "Synthesize.FACTOR",
          actions(stack) {
            /* UNARYEXPR.node = + FACTOR.syn */
            this.syn.value = "+" + this.syn.value;
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
