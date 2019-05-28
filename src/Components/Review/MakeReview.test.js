//Adrianna's test

import React from "react";
import MakeReview from "./MakeReview";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("make a review component", () => {
  it("add a value into state", () => {
    const wrapper = shallow(<MakeReview />);
    //   console.log(wrapper.debug());
    const preventDefault = jest.fn();
    wrapper.setState({
      schoolName: "",
      title: "",
      description: "",
      location: "",
      course: "",
      position: "",
      month: "",
      year: ""
    });
    wrapper.find("form").simulate("submit", { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});
