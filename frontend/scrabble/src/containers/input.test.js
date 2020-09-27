import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import Input from "../containers/input";
import configureMockStore from "redux-mock-store";
import { middlewares } from "../store";
import ReduxProvider from "../utils/reduxWrapper";

import Tile from "../components/tile";

const mockStore = configureMockStore([...middlewares]);
const mockSetIsScore = jest.fn();
const mockHandleSummary = jest.fn();

mockSetIsScore.mockReturnValueOnce(true).mockReturnValueOnce(false);

const defaultProps = {
  setIsScore: mockSetIsScore,
  handleSummary: mockHandleSummary,
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
      <Input {...setupProps} />
    </ReduxProvider>
  );
  return wrapper;
};

describe("Tile Component in Input", () => {
  test("renders section without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "tile");
    expect(component.length).toBe(1);
  });
});
