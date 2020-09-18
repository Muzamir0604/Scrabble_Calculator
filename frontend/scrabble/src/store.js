import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunkMiddleware))
);
export default store;
