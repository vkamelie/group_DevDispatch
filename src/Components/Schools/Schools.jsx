import React, { Component } from "react";
import axios from "axios";


import "./Schools.css";

import { Link } from "react-router-dom";
import MakeReview from "../Review/MakeReview";
import Reviews from "../Review/Reviews.jsx"

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
    axios.get(`/schools/${this.props.match.params.id}/reviews`).then(res => {
      this.setState({
        Schools: res.data
      });
    });
    };
    
  render() {
    const Schools = this.state.Schools;
    const courses = this.state.Schools && this.state.Schools.school.courses;
    return (
      <span>
        {this.state.Schools && (
          <div className="main">

            <h1>{Schools.school.name}</h1>
            <div className="Header-school">
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
                            <Reviews reviews={Schools.reviews} />
                            <MakeReview name={Schools.name} courses={courses} id={this.props.match.params.id} />
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
