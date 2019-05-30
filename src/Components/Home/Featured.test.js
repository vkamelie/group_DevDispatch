// Daniel's 2nd Unit Test(attempt) featured.test.js
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import axios from "axios";
import Featured from "./Featured";
import Home from "./Home";

// configure({ adapter: new Adapter() });
// describe("Grabbing my axios", () => {
//   it("Gets them axios requests", () => {
//     //Spy on axios
//     const spy = jest.spyOn(axios, "get");
//     expect(spy).toHaveBeenCalledWith(`"/schools/Featured"`);
//   });
// });

configure({ adapter: new Adapter() });

describe("Featured Component", () => {
  var Featured;
  beforeEach(() => {
    Featured = shallow(<Featured />);
  });
  it("Correctly calls axios request", () => {
    const spy = jest.spyOn(axios, "get");
    expect(spy).toHaveBeenCalledWith(`"/schools/Featured"`);
  });
});
it("Renders Featured in Home component", () => {
  const Home = mount(<Home />);
  expect(Home.children(Featured).length).toEqual(0);
});
