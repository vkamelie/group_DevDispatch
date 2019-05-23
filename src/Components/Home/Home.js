import React, { Component } from "react";
// import { placeholder } from "@babel/types";
import search from "../../media/search.svg";
import axios from "axios";
import Modal from "../Home/Modal/Modal";
import "./Home.css";
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
    axios.get(`/schools?query=${val}`).then(response => {
      this.setState({
        schools: response.data
      });
    });
  };

  //Search Model close
  render() {
    return (
      <div className="home-main">
        <div className="input-modal">
          <input
            placeholder="Find a school :)"
            type="text"
            value={this.state.input}
            onChange={e => this.handleInput(e.target.value)}
            class="home-input"
          />
          <Modal
            show={!!this.state.input.length}
            schools={this.state.schools}
          />
        </div>
        {/* <button title="Submit" type="submit">
          <img src={search} alt="icon" className="search-button" />
        </button> */}
      </div>
    );
  }
}
//Featured
//Most reviewed => order by desc

export default Home;
