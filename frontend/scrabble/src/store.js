import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const middlewares = [logger, thunkMiddleware];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export default store;
