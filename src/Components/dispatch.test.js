import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import Home from "./Home/Home";
import Featured from "./Home/Featured";
import axios from "axios";

configure({ adapter: new Adapter() });

describe("Home Component", () => {
  var home;
  var instance;

  beforeEach(() => {
    home = shallow(<Home />);
    instance = home.instance();
  });

  //Patrick McMahon, test test 123 is this thing on
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
      //Yet another classic by ya boi Patrick McMahon
      const input = home.find("input");
      input.simulate("change", {
        target: {
          value: "This is a test"
        }
      });
      expect(home.state("input")).toEqual("This is a test");
    });
    it("Makes the proper axios request", () => {
      //Guess who? Patrick McMahon
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
  it("Makes sure the Featured component is rendered by Home", () => {
    //Patrick McMahon
     const homee = mount(<Home />);
     expect(homee.children(Featured).length).toEqual(0);
  });
});
