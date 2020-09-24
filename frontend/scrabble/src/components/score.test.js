import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import ScoreCard from "./score";

const defaultProps = { score: 0 };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ScoreCard {...setupProps} />);
};

describe("Score Component", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "score");
    expect(component.length).toBe(1);
  });
  test("does not throw warning with expected props 0", () => {
    const expectedProps = { score: 0 };
    checkProps(ScoreCard, expectedProps);
  });
  test("does not throw warning with expected props positive", () => {
    const expectedProps = { score: 1 };
    checkProps(ScoreCard, expectedProps);
  });
});
