import React, { Component } from "react";
import axios from "axios";
import Modal from "../Home/Modal/Modal";
import "./Home.css";
//import Flexbox from '../Flexbox/Flexbox';

import Featured from "../Home/Featured";
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
      <React.Fragment>
        <div className="home-main">
          <div className="stykle">
            <h1 className="HText">FIND THE COOLEST BOOTCAMP FOR YOU</h1>
            <p className="HHtext">
              GET MATCHED WITH CODING BOOTCAMPS, CHOOSE THE SCHOOL THAT’S RIGHT
              FOR YOU
            </p>
            <p className="lsText">
              {" "}
              AND RESEARCH CODING BOOTCAMP REVIEWS IN ONE PLACE.
            </p>
          </div>
          <div className="input-modal">
            <input
              placeholder="Find a school :)"
              type="text"
              value={this.state.input}
              onChange={e => this.handleInput(e.target.value)}
              className="home-input"
            />
            <Modal
              show={!!this.state.input.length}
              schools={this.state.schools}
            />
          </div>
        </div>
        <div className="top-rated">
          <h1>Featured Schools</h1>
          <Featured />
        </div>
      </React.Fragment>
    );
  }
}
//Featured
//Most reviewed => order by desc

export default Home;
