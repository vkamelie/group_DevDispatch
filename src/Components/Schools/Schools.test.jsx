import React from "react";
import Schools from "./Schools";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("make a review component", () => {
  it("add a value into state", () => {
    const wrapper = shallow(<Schools />);
    const preventDefault = jest.fn();
    wrapper.setState({
      schoolName: "",
      title: "",
      description: "",    
    });
    wrapper.find("form").simulate("submit", { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});