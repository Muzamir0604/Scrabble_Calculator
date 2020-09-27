import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import Tile from "./tile";
import configureMockStore from "redux-mock-store";
import { middlewares } from "../store";
import ReduxProvider from "../utils/reduxWrapper";

const mockStore = configureMockStore([...middlewares]);

const defaultProps = { count: 10, word: ["hello", "there"] };

const setup = (props = {}) => {
  const store = mockStore({
    scoreTableReducer: {
      list: [{ letter: "hello", value: "10" }],
    },
  });
  const setupProps = { ...defaultProps, ...props };
  const wrapper = mount(
    <ReduxProvider reduxStore={store}>
      <Tile {...setupProps} />
    </ReduxProvider>
  );
  return wrapper;
};

describe("Tile Component", () => {
  test("renders section without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "tile-section");
    //not sure why it re-renders thrice
    expect(component.length).toBe(3);
  });
});
