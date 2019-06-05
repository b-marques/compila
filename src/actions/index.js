/*
 *  @file index.js
 *
 *  @author Bruno Marques do Nascimento
 *  @date 23/04/2019
 *  @version 1.0
 */

import * as actionType from "./ActionType";

export const updateCode = text => ({
  type: actionType.UPDATE_CODE,
  text: text
});

export const codeAnalysis = symbol_table => ({
  type: actionType.CODE_ANALYSIS,
  symbol_table: symbol_table
});

export const codeAnalysisExpsDec = symbol_table => ({
  type: actionType.CODE_ANALYSIS_EXPS_DEC,
  symbol_table: symbol_table
});
