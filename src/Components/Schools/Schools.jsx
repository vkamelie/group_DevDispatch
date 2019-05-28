import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MakeReview from "../Review/MakeReview";
import Reviews from "../Review/Reviews.jsx";

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
