// Daniel's 2nd Unit Test(attempt)
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import axios from "axios";
const Schools = require("./Schools");

// configure({ adapter: new Adapter() });

// describe("Unit test container", () => {
//   describe("Schools function", () => {
//     it("Should map over state with correct values", () => {
//       const Schools = jest.fn();
//       Schools.Schools(Schools.school);
//       expect().toHaveBeenCalledWith();
//     });
//   });
// });


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
