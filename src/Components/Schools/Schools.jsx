import React, { Component } from "react";
import axios from "axios";
import "./Schools.css";
import MakeReview from "../Review/MakeReview";
import Reviews from "../Review/Reviews.jsx";
import Courses from "../Courses/Courses";

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Schools: null,
      show: false
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

  toggleModal = () => {
    this.setState({
      show: !this.state.show
    });

    this.getReviews();
  };

  render() {
    const Schools = this.state.Schools;
    const courses = this.state.Schools && this.state.Schools.school.courses;
    return (
      <span>
        {this.state.Schools && (
          <div className="main">
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
              <div className="About" id="About" style={{border: '1px solid black', textAlign: 'center'}}>
            <h1>{Schools.school.name}</h1>
              <p>{Schools.school.description}</p>
                <h3>{Schools.description}</h3>
              </div>
              <h1>{Schools.school.courses.name}</h1>

              <div className="Reviews" id="Reviews">
                <Courses courses={courses} />
                <MakeReview
                  name={this.state.Schools.school.name}
                  courses={courses}
                  id={this.props.match.params.id}
                  show={this.state.show}
                  toggleModal={this.toggleModal}
                />
                <Reviews reviews={Schools.reviews} />
              </div>
            </div>
            <div className="SideTab" />
          </div>
        )}
      </span>
    );
  }
}

export default Schools;
