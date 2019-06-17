/*
 *  @file Main.js
 *
 *  @author Bruno Marques do Nascimento
 *  @date 23/04/2019
 *  @version 1.0
 */

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCode, codeAnalysis, codeAnalysisExpsDec } from "../actions";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";
import ImportFromFileBodyComponent from "./ImportFromFileBodyComponent.js";

import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";

let PADDING_SIZE = "10px";

const styles = theme => ({
  textField: {
    width: "98%",
    margin: theme.spacing.unit
  },
  paper: {
    margin: theme.spacing.unit
  },
  title: {
    display: "none",
    borderLeft: "0.1em solid #225378",
    padding: theme.spacing.unit,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  logo: {
    // backgroundColor: "white",
    margin: theme.spacing.unit
  },
  symbolTableCell: {
    backgroundColor: "#f9c29f",
    padding: PADDING_SIZE,
    align: "center"
  },
  symbolTableCellTitle: {
    backgroundColor: "#fa792c",
    padding: PADDING_SIZE
  },
  tokenListCellTitle: {
    backgroundColor: "#3954ae",
    color: "white",
    padding: PADDING_SIZE
  },
  tokenListCell: {
    borderRight: "0.1em solid gray",
    padding: PADDING_SIZE,
    backgroundColor: "#c6dcff"
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ll1_analysis: true, tabNumber: 0 };
  }

  buildGraphTransitions(node, transitions, id) {
    let myid = id;
    transitions += `"${myid}" [label="${node.value}"];`;
    if (node.left) {
      transitions += `"${myid}" -> "${id + 1}";`;
      [transitions, id] = this.buildGraphTransitions(
        node.left,
        transitions,
        id + 1
      );
    }
    if (node.right) {
      transitions += `"${myid}" -> "${id + 1}";`;
      [transitions, id] = this.buildGraphTransitions(
        node.right,
        transitions,
        id + 1
      );
    }
    if (node.center) {
      transitions += `"${myid}" -> "${id + 1}";`;
      [transitions, id] = this.buildGraphTransitions(
        node.center,
        transitions,
        id + 1
      );
    }
    return [transitions, id];
  }

  checkForGraph = () => {
    const viz = new Viz({ Module, render });
    let tree = this.props.analyser.syntacticExpsDec.syntax_tree;
    console.log(tree);

    let [transitions] = this.buildGraphTransitions(tree, "", 1);

    let graph = `digraph G {size="8.5"; node [style=filled,color=white];
${transitions}}`;
    // rankdir=TD;
    // size="8,5"
    // node [shape = point]; start
    // node [shape = doublecircle];
    // ${[...fa.finals].join(" ")}
    // node [shape = circle];
    // start -> ${fa.initial}
    // ${transitions}

    viz
      .renderSVGElement(graph)
      .then(function(element) {
        let count = document.getElementById("graphCard").childElementCount;
        if (count === 0) {
          document.getElementById("graphCard").appendChild(element);
        } else {
          let item = document.getElementById("graphCard");
          item.replaceChild(element, item.childNodes[0]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="root">
        <AppBar position="static" color="default">
          <Toolbar>
            <img src={logo} alt="logo" width="200px" className={classes.logo} />
            {/* <Typography variant="h6" color="inherit" className={classes.title}> */}
            {/* Lexical Analysis */}
            {/* </Typography> */}
          </Toolbar>
        </AppBar>
        <Tabs
          value={this.state.tabNumber}
          onChange={(e, value) => this.setState({ tabNumber: value })}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="LL1X++" />
          <Tab label="EXPS and DEC" />
        </Tabs>

        {this.state.tabNumber === 0 && (
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <ImportFromFileBodyComponent />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Input your code here..."
                  multiline
                  value={this.props.analyser.lexical.input}
                  onChange={e => {
                    e.preventDefault();
                    this.props.updateCode(e.target.value);
                  }}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  placeholder=""
                />
              </Paper>
              <Paper className={classes.paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Lexical Error (Line number)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.analyser.lexical.error_table.map(
                      (element, id) => {
                        return (
                          <TableRow key={id}>
                            <TableCell>{`Line: ${element.line} | Column: ${
                              element.column
                            } | Lexeme: ${element.detail}`}</TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </Paper>
              <Paper className={classes.paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Info</TableCell>
                      <TableCell>Line Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.analyser.syntactic.result.map((element, id) => {
                      return (
                        <TableRow key={id}>
                          <TableCell>{element.message}</TableCell>
                          <TableCell>{element.line_number}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={e => {
                    e.preventDefault();
                    this.props.codeAnalysis(
                      this.props.analyser.lexical.symbol_table.slice(0)
                    );
                  }}
                >
                  <Typography color="inherit" variant="subtitle1">
                    Syntactic Analysis
                  </Typography>
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tokenListCellTitle}>
                        Token List
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        ID
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Detail
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Lexeme
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Line
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Column
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.analyser.lexical.symbol_table.map(
                      (element, id) => {
                        return (
                          <TableRow key={id} style={{ height: 25 }}>
                            <TableCell className={classes.tokenListCell}>
                              {element.token}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.id}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.detail}
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.symbolTableCell}
                            >
                              {element.lexeme}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.line}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.column}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        )}
        {this.state.tabNumber === 1 && (
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <ImportFromFileBodyComponent />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Input your code here..."
                  multiline
                  value={this.props.analyser.lexical.input}
                  onChange={e => {
                    e.preventDefault();
                    this.props.updateCode(e.target.value);
                  }}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  placeholder=""
                />
              </Paper>
              <Paper className={classes.paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Lexical Error (Line number)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.analyser.lexical.error_table.map(
                      (element, id) => {
                        return (
                          <TableRow key={id}>
                            <TableCell>{`Line: ${element.line} | Column: ${
                              element.column
                            } | Lexeme: ${element.detail}`}</TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </Paper>
              <Paper className={classes.paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Info</TableCell>
                      <TableCell>Line Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.analyser.syntacticExpsDec.result.map(
                      (element, id) => {
                        return (
                          <TableRow key={id}>
                            <TableCell>{element.message}</TableCell>
                            <TableCell>{element.line_number}</TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={e => {
                    e.preventDefault();
                    this.props.codeAnalysisExpsDec(
                      this.props.analyser.lexical.symbol_table.slice(0)
                    );
                  }}
                >
                  <Typography color="inherit" variant="subtitle1">
                    Syntactic Analysis
                  </Typography>
                </Button>
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.title}>
                  Graphical Representation (EXPS Syntax Tree)
                </Typography>
                <Divider />
                <Typography variant="h6" className={classes.title}>
                  <div id="graphCard">{this.checkForGraph()}</div>
                </Typography>
              </Paper>

              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.tokenListCell}>
                  Inline Representation (Postorder)
                </Typography>
                <Divider />
                <div id="inlineSyntaxTree" className={classes.tokenListCell}>
                  {this.props.analyser.syntacticExpsDec.printTree()}
                </div>
              </Paper>

              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.symbolTableCell}>
                  Three Addres Code
                </Typography>
                <Divider />
                <div id="threeAddressCode" className={classes.symbolTableCell}>
                  {this.props.analyser.syntacticExpsDec
                    .printThreeAddressCode()[0]
                    .map((e, id) => (
                      <p key={id}>{e}</p>
                    ))}
                </div>
              </Paper>

              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.title}>
                  Bytes to be reserved
                </Typography>
                <Divider />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>TYPE</TableCell>
                      <TableCell>SIZE (bytes)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.analyser.syntacticExpsDec
                      .printDeclarations()
                      .map((e, id) => (
                        <TableRow key={id}>
                          <TableCell>{e.id}</TableCell>
                          <TableCell>{e.type}</TableCell>
                          <TableCell>{e.size}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tokenListCellTitle}>
                        Token List
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        ID
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Detail
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Lexeme
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Line
                      </TableCell>
                      <TableCell className={classes.symbolTableCellTitle}>
                        Column
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.analyser.lexical.symbol_table.map(
                      (element, id) => {
                        return (
                          <TableRow key={id} style={{ height: 25 }}>
                            <TableCell className={classes.tokenListCell}>
                              {element.token}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.id}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.detail}
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.symbolTableCell}
                            >
                              {element.lexeme}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.line}
                            </TableCell>
                            <TableCell className={classes.symbolTableCell}>
                              {element.column}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ analyser: state.analyserReducer });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCode,
      codeAnalysis,
      codeAnalysisExpsDec
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Main));
