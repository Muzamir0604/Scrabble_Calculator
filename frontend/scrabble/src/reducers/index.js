import { combineReducers } from "redux";

import userEntryReducer from "./userEntryReducer";
const rootReducer = combineReducers({ userEntryReducer });
export default rootReducer;
