/*
 *  @file ImportFromFileComponent.js
 *
 *  @author Bruno Marques do Nascimento
 *  @date 23/04/2019
 *  @version 1.0
 */

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withStyles } from "@material-ui/core/styles";
import { updateCode } from "../actions";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: "98%"
  },
  input: {
    display: "none"
  }
});

const ImportFromFileBodyComponent = props => {
  const { classes } = props;
  let fileReader;

  const handleFileRead = e => {
    const content = fileReader.result;
    props.updateCode(content);
  };

  const handleFileChosen = file => {
    if (file !== undefined) {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  return (
    // <div className="upload-expense">
    //   <input
    //     type="file"
    //     id="file"
    //     className="input-file"
    //     accept=".xpp"
    //     onChange={e => handleFileChosen(e.target.files[0])}
    //   />
    // </div>
    <div>
      <input
        accept=".xpp"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          className={classes.button}
          color="primary"
        >
          SELECT LOCAL FILE
        </Button>
      </label>
    </div>
  );
};

const mapStateToProps = state => ({ analyser: state.analyserReducer });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCode
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ImportFromFileBodyComponent));
