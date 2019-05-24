import React, { Component } from "react";
// import { placeholder } from "@babel/types";
import search from "../../media/search.svg";

import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      input: "",
      toggle: false
    };
  }
  // Search results for Input
  handleInput = val => {
    this.setState({
      input: val
    });
    axios.get(`/schools?query=${this.state.input}`).then(response => {
      this.setState({
        schools: response.data
      });
    });
  };
  //   Search Model Show
  showSearch = () => {
    this.setState({
      toggle: true
    });
  };
  //   Search Model close
  closeSearch = () => {
    this.setState({
      toggle: false
    });
  };
  render() {
    return (
      <div>
        <div className="searchSet">
          <input
            placeholder={"Type a School Name"}
            type="text"
            value={this.state.input}
            onChange={e => this.handleInput(e.target.value)}
          />
          <button title="Submit" type="submit">
            <img src={search} alt="icon" />
          </button>
        </div>
        <button onClick={this.showSearch}>Open</button>
        <div className={` ${this.state.toggle ? "show" : "close"}`}>
          <button onClick={this.closeSearch}>Close</button>
        </div>
      </div>
    );
  }
}

export default Home;
