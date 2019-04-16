import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCode } from "../actions";

const ImportFromFileBodyComponent = () => {
	let fileReader;

	const handleFileRead = (e) => {
		const content = fileReader.result;
		this.updateCode(content);
	};

	const handleFileChosen = (file) => {
		fileReader = new FileReader();
		fileReader.onloadend = handleFileRead;
		fileReader.readAsText(file);
	};

	return <div className='upload-expense'>
		<input type='file'
			   id='file'
			   className='input-file'
			   accept='.xpp'
			   onChange={e => handleFileChosen(e.target.files[0])}
		/>
	</div>;
};

const mapStateToProps = state => ({ analyser: state.analyserReducer });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCode,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportFromFileBodyComponent);