import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Schools: null
    };
  }
  componentDidMount = () => {
    this.getReviews();
  };

  getReviews = () => {
    axios.get("/schools/1/reviews").then(res => {
      console.log(res);
      this.setState({
        Schools: res.data
      });
    });
  };
  // componentDidMount = () => {
  //   this.getAllSchools();
  // };

  // getAllSchools = () => {
  //   axios.get("/schools/all").then(res => {
  //     this.setState({
  //       Schools: res.data
  //     });
  //   });
  // };
  render() {
    const Schools = this.state.Schools;
    return (
      <span>
        {this.state.Schools && (
          <div className="main">
            <h1>{Schools.school.name}</h1>
            <div className="Header">
              <a href="#About">
                <button>About</button>
              </a>

              <a href="#Courses">
                <button>Courses</button>
              </a>

              <a href="#Reviews">
                <button>Reviews</button>
              </a>
            </div>
            <div className="Schools">
              <p>{Schools.school.description}</p>
              <div className="About" id="About">
                about school will go here
              </div>
              <div className="Courses" id="Courses">
                Course List will go here
              </div>
              <h1>{Schools.school.courses.name}</h1>

              <div className="Reviews" id="Reviews">
                Reviews will go here
              </div>
            </div>
            <div className="SideTab" />
          </div>
        )}{" "}
      </span>
    );
  }
}

export default Schools;
