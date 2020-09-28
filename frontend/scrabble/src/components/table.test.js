import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import Table from "./table";
import configureMockStore from "redux-mock-store";
import { middlewares } from "../store";
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
    {
      created_at: "2020-09-27T18:17:42.127564Z",
      id: 106,
      name: "muzamir",
      score: 12,
      word: "helloasd",
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Table {...setupProps} />);
  return wrapper;
};

describe("Table Component", () => {
  test("renders container without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "table-container");

    expect(component.length).toBe(1);
  });
  test("renders header without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "table-head");

    expect(component.length).toBe(1);
  });
  test("renders row without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "table-body");
    expect(component.length).toBe(1);
  });
  test("renders 3 columns without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "table-column");
    expect(component.length).toBe(3);
  });
  test("renders list N rows without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "table-row");
    expect(component.length).toBe(defaultProps.list.length);
  });
});
