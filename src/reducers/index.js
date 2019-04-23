/*
 *  @file index.js
 *
 *  @author Bruno Marques do Nascimento
 *  @date 23/04/2019
 *  @version 1.0
 */

import { combineReducers } from "redux";
import analyserReducer from "./analyserReducer";

const analyserApp = combineReducers({
  analyserReducer
});

export default analyserApp;
