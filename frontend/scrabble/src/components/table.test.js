import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import Table from "./table";
import configureMockStore from "redux-mock-store";
import { middlewares } from "../store";
import ReduxProvider from "../utils/reduxWrapper";

const mockStore = configureMockStore([...middlewares]);

const defaultProps = {
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
};

const setup = (props = {}) => {
  const store = mockStore({
    scoreTableReducer: {
      list: [{ letter: "hello", value: "10" }],
    },
  });
  const setupProps = { ...defaultProps, ...props };
  const wrapper = mount(
    <ReduxProvider reduxStore={store}>
      <Table {...setupProps} />
    </ReduxProvider>
  );
  return wrapper;
};

describe("Table Component", () => {
  test("renders container without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "table-container");
    //not sure why it re-renders 5 times
    expect(component.length).toBe(5);
  });
  test("renders header without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "styled-header");

    expect(component.length).toBe(12);
  });
  test("renders row without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "table-row");
    // re-render 3 times
    expect(component.length).toBe(6);
  });
});
