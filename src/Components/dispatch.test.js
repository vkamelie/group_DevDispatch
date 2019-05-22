import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Home from "./Home/Home";
import axios from "axios";

configure({ adapter: new Adapter() });

describe("Home Component", () => {
  var home;
  var instance;

  beforeEach(() => {
    home = shallow(<Home />);
    instance = home.instance();
  });

  describe("Input onChange", () => {
    it("Calls input handler function", () => {
      //Spy
      const spy = jest.spyOn(instance, "handleInput");

      //Get input
      const input = home.find("input");
      //Simulate value change
      input.simulate("change", {
        target: {
          value: "Hello, World!"
        }
      });
      expect(spy).toHaveBeenCalledWith("Hello, World!");
    });

    it("Sets state correctly when input changes", () => {
      const input = home.find("input");
      input.simulate("change", {
        target: {
          value: "This is a test"
        }
      });
      expect(home.state("input")).toEqual("This is a test");
    });
    it("Makes the proper axios request", () => {
      //Spy on axios
      const spy = jest.spyOn(axios, "get");

      const input = home.find("input");
      //Simulate value change
      input.simulate("change", {
        target: {
          value: "De"
        }
      });
      expect(spy).toHaveBeenCalledWith(`/schools?query=De`);
    });
  });
});
