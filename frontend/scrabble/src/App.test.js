import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, checkProps } from "./utils/testUtils";
import App from "./app";
import configureMockStore from "redux-mock-store";
import { middlewares } from "./store";
import ReduxProvider from "./utils/reduxWrapper";

// https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice#:~:text=React%20is%20rendering%20the%20component,and%20triggers%20the%20async%20operation.

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
  test("renders app container without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "test-app");
    expect(component.length).toBe(1);
  });
  test("renders score without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "test-score");
    expect(component.length).toBe(1);
  });
  //As thunk middleware calls on the action creators, the render will be thrice with initial, loading and final.
  test("renders input without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "test-input");
    expect(component.length).toBe(3);
  });
  test("do not render table without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "test-table");
    expect(component.length).toBe(0);
  });
});
