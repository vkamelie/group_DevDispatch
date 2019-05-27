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
            <h1>{Schools.school.name}</h1>
            <div className="Header">
              <h3>About</h3>
              <h3>Courses</h3>
              <h3>Reviews</h3>
            </div>
            <div className="Schools">
              <p>{Schools.school.description}</p>
              <div className="About" />
              <div className="Courses" />
              <h1>{Schools.school.courses.name}</h1>

              <div className="Reviews" />
            </div>
            <div className="SideTab" />
            <MakeReview
              name={Schools.school.name}
              id={this.props.match.params.id}
              courses={courses}
            />
            <Reviews reviews={Schools.reviews} />
          </div>
        )}
      </span>
    );
  }
}

export default Schools;
