import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import Tile from "./tile";
import configureMockStore from "redux-mock-store";
import { middlewares } from "../store";
import ReduxProvider from "../utils/reduxWrapper";

// const mockStore = configureMockStore([...middlewares]);

const defaultProps = {
  count: 10,
  word: ["hello", "there"],
  scoreList: [{ letter: "hello", value: "10" }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Tile {...setupProps} />);
  return wrapper;
};

describe("Tile Component", () => {
  test("renders section without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "tile-section");

    expect(component.length).toBe(1);
  });
});
