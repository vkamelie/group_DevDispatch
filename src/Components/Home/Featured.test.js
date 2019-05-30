// Daniel's 2nd Unit Test(attempt)
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import axios from "axios";

configure({ adapter: new Adapter() });

describe("Grabbing my axios", () => {
  it("Gets them axios requests", () => {
    //Spy on axios
    const spy = jest.spyOn(axios, "get");

    expect(spy).toHaveBeenCalledWith(`"/schools/Featured"`);
  });
});
