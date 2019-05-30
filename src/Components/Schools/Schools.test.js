// Daniel's 2nd Unit Test(attempt)
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import axios from "axios";
const Schools = require("./Schools");

configure({ adapter: new Adapter() });

describe("Unit test container", () => {
  describe("Schools function", () => {
    it("Should map over state with correct values", () => {
      // Declare mock function
      const Schools = jest.fn();
      // invoke function we're testing in the arguments
      Schools.Schools(Schools.school);
      // write the actual test
      expect().toHaveBeenCalledWith();
    });
  });
});
