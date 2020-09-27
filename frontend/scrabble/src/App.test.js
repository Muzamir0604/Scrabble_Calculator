import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, checkProps } from "./utils/testUtils";
import App from "./app";
import configureMockStore from "redux-mock-store";
import { middlewares } from "./store";
import ReduxProvider from "./utils/reduxWrapper";

const mockStore = configureMockStore([...middlewares]);

const defaultProps = {};

const setup = (props = {}) => {
  const store = mockStore({
    scoreTableReducer: {
      list: [{ letter: "hello", value: "10" }],
    },
    userEntryReducer: {
      score: 0,
      list: [
        {
          created_at: "2020-09-27T18:17:42.127564Z",
          id: 103,
          name: "muzamir",
          score: 12,
          word: "helloasd",
        },
        {
          created_at: "2020-09-27T18:17:42.127564Z",
          id: 105,
          name: "muzamir",
          score: 12,
          word: "helloasd",
        },
      ],
    },
  });
  const setupProps = { ...defaultProps, ...props };
  const wrapper = mount(
    <ReduxProvider reduxStore={store}>
      <App {...setupProps} />
    </ReduxProvider>
  );
  return wrapper;
};

describe("App Component", () => {
  test("renders container without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "test-app");
    expect(component.length).toBe(1);
  });
});
