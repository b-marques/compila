import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCode, codeAnalysis } from "../actions";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Grid from "@material-ui/core/Grid";

// import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";
import ImportFromFileBodyComponent from "./ImportFromFileBodyComponent.js";

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
    backgroundColor: "#f9c29f"
  },
  symbolTableCellTitle: {
    backgroundColor: "#fa792c"
  },
  tokenListCell: {
    borderRight: "0.1em solid gray",
    backgroundColor: "#c6dcff"
  }
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="root">
        <AppBar position="static" color="default">
          <Toolbar>
            <img src={logo} alt="logo" width="200px" className={classes.logo} />
            <Typography variant="h6" color="inherit" className={classes.title}>
              Lexical Analysis
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0}>
          <Grid item xs={6}>
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
            {/* <Paper className={classes.paper}>
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
            </Paper> */}
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={classes.tokenListCell}
                      style={{ backgroundColor: "#3954ae", color: "white" }}
                    >
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
                        <TableRow key={id}>
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
          <Grid item xs={6} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ analyser: state.analyserReducer });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCode,
      codeAnalysis
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Main));
