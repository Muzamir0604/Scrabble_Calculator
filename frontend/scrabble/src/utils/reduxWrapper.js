import React from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export default ReduxProvider;
