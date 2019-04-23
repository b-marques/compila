/*
 *  @file analyserReducer.js
 *
 *  @author Bruno Marques do Nascimento
 *  @date 23/04/2019
 *  @version 1.0
 */

import * as actionType from "../actions/ActionType";

const analyserReducer = (state = 0, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case actionType.UPDATE_CODE:
      newState.lexical.processInput(action.text);

      return newState;

    // case actionType.CODE_ANALYSIS:
    //   newState.syntactic.analysis(action.symbol_table);

    // return newState;

    default:
      return newState;
  }
};
export default analyserReducer;
