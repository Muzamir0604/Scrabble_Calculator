import { combineReducers } from "redux";

import userEntryReducer from "./userEntryReducer";
import scoreTableReducer from "./scoreTableReducer";
const rootReducer = combineReducers({ userEntryReducer, scoreTableReducer });
export default rootReducer;
