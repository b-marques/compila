export default class Lexical {
  constructor(input) {
    this.id = 1;
    this.input = input;
    this.reserved_stuff = [
      { lexeme: "class", token: "RW", detail: "" },
      { lexeme: "extends", token: "RW", detail: "" },
      { lexeme: "int", token: "RW", detail: "" },
      { lexeme: "string", token: "RW", detail: "" },
      { lexeme: "constructor", token: "RW", detail: "" },
      { lexeme: "break", token: "RW", detail: "" },
      { lexeme: "print", token: "RW", detail: "" },
      { lexeme: "read", token: "RW", detail: "" },
      { lexeme: "return", token: "RW", detail: "" },
      { lexeme: "super", token: "RW", detail: "" },
      { lexeme: "if", token: "RW", detail: "" },
      { lexeme: "else", token: "RW", detail: "" },
      { lexeme: "for", token: "RW", detail: "" },
      { lexeme: "new", token: "RW", detail: "" },
      { lexeme: "null", token: "RW", detail: "" },
      { lexeme: "*", token: "ARITOP", detail: "Multiplication" },
      { lexeme: "/", token: "ARITOP", detail: "Division" },
      { lexeme: "%", token: "ARITOP", detail: "Modulo" },
      { lexeme: "+", token: "ARITOP", detail: "Addition" },
      { lexeme: "-", token: "ARITOP", detail: "Subtraction" },
      { lexeme: "{", token: "PUNCTUATION", detail: "Left Brace" },
      { lexeme: "}", token: "PUNCTUATION", detail: "Right Brace" },
      { lexeme: ";", token: "PUNCTUATION", detail: "Semicolon" },
      { lexeme: "[", token: "PUNCTUATION", detail: "Left Bracket" },
      { lexeme: "]", token: "PUNCTUATION", detail: "Right Bracket" },
      { lexeme: "(", token: "PUNCTUATION", detail: "Left parenthesis" },
      { lexeme: ")", token: "PUNCTUATION", detail: "Right parenthesis" },
      { lexeme: ",", token: "PUNCTUATION", detail: "Comma" },
      { lexeme: ".", token: "PUNCTUATION", detail: "Dot" },
      { lexeme: "<", token: "RELOP", detail: "Less than" },
      { lexeme: "<=", token: "RELOP", detail: "Less than or equal to" },
      { lexeme: ">", token: "RELOP", detail: "Greater than" },
      { lexeme: ">=", token: "RELOP", detail: "Greater than or equal to" },
      { lexeme: "==", token: "RELOP", detail: "Equal" },
      { lexeme: "!=", token: "RELOP", detail: "Not Equal" },
      { lexeme: "=", token: "ASSIGNMENT", detail: "" }
    ];
    this.symbol_table = [];
    this.error_table = [];

    this.alphabet = new Set([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "*",
      "/",
      "%",
      "+",
      "-",
      ";",
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      "<",
      ">",
      "=",
      "!",
      ".",
      ",",
      '"',
      " "
    ]);
    this.states = new Set([
      "q0",
      "*",
      "/",
      "%",
      "+",
      "-",
      ";",
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      "<",
      "<=",
      ">",
      ">=",
      "=",
      "==",
      "!",
      "!=",
      ",",
      ".",
      "identifier",
      "num",
      "string-open",
      "string-close",
      "error"
    ]);
    this.finals = new Set([
      "*",
      "/",
      "%",
      "+",
      "-",
      ";",
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      "<",
      "<=",
      ">",
      ">=",
      "=",
      "==",
      "!=",
      ",",
      ".",
      "identifier",
      "num",
      "string-close"
    ]);

    this.possible_finals = new Set(["!", "string-open"]);
    this.initial = "q0";
    this.transitions = [];
    for (let state of this.states) {
      this.transitions[state] = [];
      for (let symbol of this.alphabet) {
        this.transitions[state][symbol] = { to: new Set(["error"]) };
      }
    }

    // Define transitions from initial state
    this.transitions["q0"]["a"].to = new Set(["identifier"]);
    this.transitions["q0"]["b"].to = new Set(["identifier"]);
    this.transitions["q0"]["c"].to = new Set(["identifier"]);
    this.transitions["q0"]["d"].to = new Set(["identifier"]);
    this.transitions["q0"]["e"].to = new Set(["identifier"]);
    this.transitions["q0"]["f"].to = new Set(["identifier"]);
    this.transitions["q0"]["g"].to = new Set(["identifier"]);
    this.transitions["q0"]["h"].to = new Set(["identifier"]);
    this.transitions["q0"]["i"].to = new Set(["identifier"]);
    this.transitions["q0"]["j"].to = new Set(["identifier"]);
    this.transitions["q0"]["k"].to = new Set(["identifier"]);
    this.transitions["q0"]["l"].to = new Set(["identifier"]);
    this.transitions["q0"]["m"].to = new Set(["identifier"]);
    this.transitions["q0"]["n"].to = new Set(["identifier"]);
    this.transitions["q0"]["o"].to = new Set(["identifier"]);
    this.transitions["q0"]["p"].to = new Set(["identifier"]);
    this.transitions["q0"]["q"].to = new Set(["identifier"]);
    this.transitions["q0"]["r"].to = new Set(["identifier"]);
    this.transitions["q0"]["s"].to = new Set(["identifier"]);
    this.transitions["q0"]["t"].to = new Set(["identifier"]);
    this.transitions["q0"]["u"].to = new Set(["identifier"]);
    this.transitions["q0"]["v"].to = new Set(["identifier"]);
    this.transitions["q0"]["w"].to = new Set(["identifier"]);
    this.transitions["q0"]["x"].to = new Set(["identifier"]);
    this.transitions["q0"]["y"].to = new Set(["identifier"]);
    this.transitions["q0"]["z"].to = new Set(["identifier"]);
    this.transitions["q0"]["A"].to = new Set(["identifier"]);
    this.transitions["q0"]["B"].to = new Set(["identifier"]);
    this.transitions["q0"]["C"].to = new Set(["identifier"]);
    this.transitions["q0"]["D"].to = new Set(["identifier"]);
    this.transitions["q0"]["E"].to = new Set(["identifier"]);
    this.transitions["q0"]["F"].to = new Set(["identifier"]);
    this.transitions["q0"]["G"].to = new Set(["identifier"]);
    this.transitions["q0"]["H"].to = new Set(["identifier"]);
    this.transitions["q0"]["I"].to = new Set(["identifier"]);
    this.transitions["q0"]["J"].to = new Set(["identifier"]);
    this.transitions["q0"]["K"].to = new Set(["identifier"]);
    this.transitions["q0"]["L"].to = new Set(["identifier"]);
    this.transitions["q0"]["M"].to = new Set(["identifier"]);
    this.transitions["q0"]["N"].to = new Set(["identifier"]);
    this.transitions["q0"]["O"].to = new Set(["identifier"]);
    this.transitions["q0"]["P"].to = new Set(["identifier"]);
    this.transitions["q0"]["Q"].to = new Set(["identifier"]);
    this.transitions["q0"]["R"].to = new Set(["identifier"]);
    this.transitions["q0"]["S"].to = new Set(["identifier"]);
    this.transitions["q0"]["T"].to = new Set(["identifier"]);
    this.transitions["q0"]["U"].to = new Set(["identifier"]);
    this.transitions["q0"]["V"].to = new Set(["identifier"]);
    this.transitions["q0"]["W"].to = new Set(["identifier"]);
    this.transitions["q0"]["X"].to = new Set(["identifier"]);
    this.transitions["q0"]["Y"].to = new Set(["identifier"]);
    this.transitions["q0"]["Z"].to = new Set(["identifier"]);
    this.transitions["q0"]["0"].to = new Set(["num"]);
    this.transitions["q0"]["1"].to = new Set(["num"]);
    this.transitions["q0"]["2"].to = new Set(["num"]);
    this.transitions["q0"]["3"].to = new Set(["num"]);
    this.transitions["q0"]["4"].to = new Set(["num"]);
    this.transitions["q0"]["5"].to = new Set(["num"]);
    this.transitions["q0"]["6"].to = new Set(["num"]);
    this.transitions["q0"]["7"].to = new Set(["num"]);
    this.transitions["q0"]["8"].to = new Set(["num"]);
    this.transitions["q0"]["9"].to = new Set(["num"]);
    this.transitions["q0"]["*"].to = new Set(["*"]);
    this.transitions["q0"]["/"].to = new Set(["/"]);
    this.transitions["q0"]["%"].to = new Set(["%"]);
    this.transitions["q0"]["+"].to = new Set(["+"]);
    this.transitions["q0"]["-"].to = new Set(["-"]);
    this.transitions["q0"][";"].to = new Set([";"]);
    this.transitions["q0"]["("].to = new Set(["("]);
    this.transitions["q0"][")"].to = new Set([")"]);
    this.transitions["q0"]["{"].to = new Set(["{"]);
    this.transitions["q0"]["}"].to = new Set(["}"]);
    this.transitions["q0"]["["].to = new Set(["["]);
    this.transitions["q0"]["]"].to = new Set(["]"]);
    this.transitions["q0"]["<"].to = new Set(["<"]);
    this.transitions["q0"][">"].to = new Set([">"]);
    this.transitions["q0"]["="].to = new Set(["="]);
    this.transitions["q0"]["!"].to = new Set(["!"]);
    this.transitions["q0"]["."].to = new Set(["."]);
    this.transitions["q0"][","].to = new Set([","]);

    this.transitions["<"]["="].to = new Set(["<="]);
    this.transitions[">"]["="].to = new Set([">="]);
    this.transitions["="]["="].to = new Set(["=="]);
    this.transitions["!"]["="].to = new Set(["!="]);

    this.transitions["identifier"]["a"].to = new Set(["identifier"]);
    this.transitions["identifier"]["b"].to = new Set(["identifier"]);
    this.transitions["identifier"]["c"].to = new Set(["identifier"]);
    this.transitions["identifier"]["d"].to = new Set(["identifier"]);
    this.transitions["identifier"]["e"].to = new Set(["identifier"]);
    this.transitions["identifier"]["f"].to = new Set(["identifier"]);
    this.transitions["identifier"]["g"].to = new Set(["identifier"]);
    this.transitions["identifier"]["h"].to = new Set(["identifier"]);
    this.transitions["identifier"]["i"].to = new Set(["identifier"]);
    this.transitions["identifier"]["j"].to = new Set(["identifier"]);
    this.transitions["identifier"]["k"].to = new Set(["identifier"]);
    this.transitions["identifier"]["l"].to = new Set(["identifier"]);
    this.transitions["identifier"]["m"].to = new Set(["identifier"]);
    this.transitions["identifier"]["n"].to = new Set(["identifier"]);
    this.transitions["identifier"]["o"].to = new Set(["identifier"]);
    this.transitions["identifier"]["p"].to = new Set(["identifier"]);
    this.transitions["identifier"]["q"].to = new Set(["identifier"]);
    this.transitions["identifier"]["r"].to = new Set(["identifier"]);
    this.transitions["identifier"]["s"].to = new Set(["identifier"]);
    this.transitions["identifier"]["t"].to = new Set(["identifier"]);
    this.transitions["identifier"]["u"].to = new Set(["identifier"]);
    this.transitions["identifier"]["v"].to = new Set(["identifier"]);
    this.transitions["identifier"]["w"].to = new Set(["identifier"]);
    this.transitions["identifier"]["x"].to = new Set(["identifier"]);
    this.transitions["identifier"]["y"].to = new Set(["identifier"]);
    this.transitions["identifier"]["z"].to = new Set(["identifier"]);
    this.transitions["identifier"]["A"].to = new Set(["identifier"]);
    this.transitions["identifier"]["B"].to = new Set(["identifier"]);
    this.transitions["identifier"]["C"].to = new Set(["identifier"]);
    this.transitions["identifier"]["D"].to = new Set(["identifier"]);
    this.transitions["identifier"]["E"].to = new Set(["identifier"]);
    this.transitions["identifier"]["F"].to = new Set(["identifier"]);
    this.transitions["identifier"]["G"].to = new Set(["identifier"]);
    this.transitions["identifier"]["H"].to = new Set(["identifier"]);
    this.transitions["identifier"]["I"].to = new Set(["identifier"]);
    this.transitions["identifier"]["J"].to = new Set(["identifier"]);
    this.transitions["identifier"]["K"].to = new Set(["identifier"]);
    this.transitions["identifier"]["L"].to = new Set(["identifier"]);
    this.transitions["identifier"]["M"].to = new Set(["identifier"]);
    this.transitions["identifier"]["N"].to = new Set(["identifier"]);
    this.transitions["identifier"]["O"].to = new Set(["identifier"]);
    this.transitions["identifier"]["P"].to = new Set(["identifier"]);
    this.transitions["identifier"]["Q"].to = new Set(["identifier"]);
    this.transitions["identifier"]["R"].to = new Set(["identifier"]);
    this.transitions["identifier"]["S"].to = new Set(["identifier"]);
    this.transitions["identifier"]["T"].to = new Set(["identifier"]);
    this.transitions["identifier"]["U"].to = new Set(["identifier"]);
    this.transitions["identifier"]["V"].to = new Set(["identifier"]);
    this.transitions["identifier"]["W"].to = new Set(["identifier"]);
    this.transitions["identifier"]["X"].to = new Set(["identifier"]);
    this.transitions["identifier"]["Y"].to = new Set(["identifier"]);
    this.transitions["identifier"]["Z"].to = new Set(["identifier"]);
    this.transitions["identifier"]["0"].to = new Set(["identifier"]);
    this.transitions["identifier"]["1"].to = new Set(["identifier"]);
    this.transitions["identifier"]["2"].to = new Set(["identifier"]);
    this.transitions["identifier"]["3"].to = new Set(["identifier"]);
    this.transitions["identifier"]["4"].to = new Set(["identifier"]);
    this.transitions["identifier"]["5"].to = new Set(["identifier"]);
    this.transitions["identifier"]["6"].to = new Set(["identifier"]);
    this.transitions["identifier"]["7"].to = new Set(["identifier"]);
    this.transitions["identifier"]["8"].to = new Set(["identifier"]);
    this.transitions["identifier"]["9"].to = new Set(["identifier"]);

    this.transitions["num"]["0"].to = new Set(["num"]);
    this.transitions["num"]["1"].to = new Set(["num"]);
    this.transitions["num"]["2"].to = new Set(["num"]);
    this.transitions["num"]["3"].to = new Set(["num"]);
    this.transitions["num"]["4"].to = new Set(["num"]);
    this.transitions["num"]["5"].to = new Set(["num"]);
    this.transitions["num"]["6"].to = new Set(["num"]);
    this.transitions["num"]["7"].to = new Set(["num"]);
    this.transitions["num"]["8"].to = new Set(["num"]);
    this.transitions["num"]["9"].to = new Set(["num"]);

    this.transitions["-"]["0"].to = new Set(["num"]);
    this.transitions["-"]["1"].to = new Set(["num"]);
    this.transitions["-"]["2"].to = new Set(["num"]);
    this.transitions["-"]["3"].to = new Set(["num"]);
    this.transitions["-"]["4"].to = new Set(["num"]);
    this.transitions["-"]["5"].to = new Set(["num"]);
    this.transitions["-"]["6"].to = new Set(["num"]);
    this.transitions["-"]["7"].to = new Set(["num"]);
    this.transitions["-"]["8"].to = new Set(["num"]);
    this.transitions["-"]["9"].to = new Set(["num"]);

    this.transitions["q0"]['"'].to = new Set(["string-open"]);
    for (let symbol of this.alphabet) {
      this.transitions["string-open"][symbol] = {
        to: new Set(["string-open"])
      };
    }
    this.transitions["string-open"]['"'].to = new Set(["string-close"]);

    // console.log(this.transitions);
    this.processInput(input);
  }

  processInput(input) {
    this.reset_ids();
    this.input = input;
    let lexeme = "";
    let forward = 0;
    let state = "q0";
    let has_char = true;
    let line_number = 0;
    let lexeme_begin = 0;
    let column_number = 0;

    while (has_char) {
      if (this.input[forward] === "\n") {
        forward++;
        lexeme_begin = forward;
        line_number++;
        column_number = 0;
      } else if (this.input[forward] === " ") {
        forward++;
        lexeme_begin = forward;
        column_number++;
      } else if (
        this.transitions[state][this.input[forward]] === undefined ||
        [...this.transitions[state][this.input[forward]].to][0] === "error"
      ) {
        lexeme = this.input[forward];
        state = "error";
      } else {
        let was_final = false;
        let possible_final = false;
        do {
          state = [...this.transitions[state][this.input[forward]].to][0];
          if (state === "string-open") {
            do {
              forward++;
              column_number++;
              // Line/Column number control
              if (this.input[forward] === "\n") {
                column_number = 0;
                line_number++;
              }
            } while (
              this.input[forward] !== undefined &&
              this.input[forward] !== '"'
            );
            lexeme = this.input.slice(lexeme_begin, forward + 1);
            if (this.input[forward] === '"') {
              state = "string-close";
            } else {
              state = "error";
            }
            break;
          } else {
            if (this.finals.has(state)) {
              possible_final = false;
              was_final = true;
            } else if (this.possible_finals.has(state)) {
              possible_final = true;
              was_final = false;
            }
            column_number++;
            forward++;
          }
        } while (
          this.input[forward] !== undefined &&
          this.transitions[state][this.input[forward]] !== undefined &&
          [...this.transitions[state][this.input[forward]].to][0] !== "error"
        );
        if (was_final) {
          lexeme = this.input.slice(lexeme_begin, forward);
        } else if (possible_final) {
          lexeme = this.input.slice(lexeme_begin, forward);
          forward--;
          column_number--;
          state = "error";
        }
      }
      let info;
      switch (state) {
        case "error":
          this.error_table.push({
            line: line_number,
            column: column_number,
            detail: lexeme
          });
          forward++;
          column_number++;
          lexeme_begin = forward;
          break;

        case "num":
          this.symbol_table.push({
            id: this.id++,
            lexeme: lexeme,
            token: "NUM",
            detail: "",
            line: line_number,
            column: column_number - lexeme.length
          });
          lexeme_begin = forward;
          break;

        case "string-close":
          this.symbol_table.push({
            id: this.id++,
            lexeme: lexeme,
            token: "STRING",
            detail: "",
            line: line_number,
            column: column_number
          });
          forward++;
          column_number++;
          lexeme_begin = forward;
          break;

        case "q0":
          // DO NOTHING
          break;

        case "identifier":
          info = this.reserved_stuff.filter(e => e.lexeme === lexeme);
          if (info.length === 0) {
            this.symbol_table.push({
              id: this.id++,
              lexeme: lexeme,
              token: "ID",
              detail: "",
              line: line_number,
              column: column_number - lexeme.length
            });
            lexeme_begin = forward;
          } else {
            this.symbol_table.push({
              id: this.id++,
              token: info[0].token,
              lexeme: info[0].lexeme,
              detail: info[0].detail,
              line: line_number,
              column: column_number - lexeme.length
            });
          }
          break;

        default:
          info = this.reserved_stuff.filter(e => e.lexeme === state);
          this.symbol_table.push({
            id: this.id++,
            token: info[0].token,
            lexeme: info[0].lexeme,
            detail: info[0].detail,
            line: line_number,
            column: column_number - lexeme.length
          });
          lexeme_begin = forward;
          break;
      }
      state = "q0";

      if (this.input[forward] === undefined) has_char = false;
    }

    // for (let index of input) {
    // console.log(index);
    // }

    // // Prepare to analysis, managing whitespaces
    // let splitted_input = input.replace(/[ \t\r]+/g, " ");
    // splitted_input = splitted_input.replace(/\n/g, " \n ");
    // splitted_input = splitted_input.replace(/;/g, " ; ");
    // splitted_input = splitted_input.replace(/\(/g, " ( ");
    // splitted_input = splitted_input.replace(/\)/g, " ) ");
    // splitted_input = splitted_input.replace(/\{/g, " { ");
    // splitted_input = splitted_input.replace(/\}/g, " } ");
    // splitted_input = splitted_input.replace(/\[/g, " [ ");
    // splitted_input = splitted_input.replace(/\]/g, " ] ");

    // // Split by whitespace to read lexeme
    // splitted_input = splitted_input.split(" ");
    // let line_number = 1;

    // for (let lexeme of splitted_input) {
    //   let state = "q0";
    //   let characters = lexeme.split("");
    //   for (let char of characters) {
    //     if (char === "\n") {
    //       line_number++;
    //     } else if (this.transitions[state][char] === undefined) {
    //       state = "error";
    //     } else {
    //       state = [...this.transitions[state][char].to][0];
    //     }
    //   }

    //   if (this.finals.has(state)) {
    //     let info;
    //     switch (state) {
    //       case "identifier":
    //         info = this.reserved_stuff.filter(e => e.lexema === lexeme);
    //         if (info.length === 0) {
    //           this.symbol_table.push({
    //             id: this.id++,
    //             lexema: lexeme,
    //             token: "ID",
    //             detail: "",
    //             line: line_number
    //           });
    //         } else {
    //           this.symbol_table.push({
    //             id: this.id++,
    //             token: info[0].token,
    //             lexema: info[0].lexema,
    //             detail: info[0].detail,
    //             line: line_number
    //           });
    //         }
    //         break;
    //       case "num":
    //         this.symbol_table.push({
    //           id: this.id++,
    //           lexema: lexeme,
    //           token: "NUM",
    //           detail: "",
    //           line: line_number
    //         });
    //         break;
    //       case "real":
    //         this.symbol_table.push({
    //           id: this.id++,
    //           lexema: lexeme,
    //           token: "REAL",
    //           detail: "",
    //           line: line_number
    //         });
    //         break;
    //       default:
    //         info = this.reserved_stuff.filter(e => e.lexema === state);
    //         this.symbol_table.push({
    //           id: this.id++,
    //           token: info[0].token,
    //           lexema: info[0].lexema,
    //           detail: info[0].detail,
    //           line: line_number
    //         });
    //         break;
    //     }
    //   } else if (state === "q0") {
    //     // do nothing
    //   } else {
    //     this.error_table.push({ line: line_number });
    //   }
    // }
  }

  reset_ids() {
    for (let each of this.reserved_stuff) {
      each.ids = [];
    }
    this.symbol_table = [];
    this.error_table = [];
    this.id = 0;
  }
}
