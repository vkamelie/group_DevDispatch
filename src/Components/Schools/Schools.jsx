import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    const Schools = this.state.Schools 
    console.log(Schools)
    // const Schools = this.state.Schools.map(Schools => {
      //   console.log(Schools);
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

          <div>This is where you can the specific Schools</div>
        </div>
       
        )} </span>
      );
    // });

    return <div className="Yass">{Schools}</div>;
  }
}

export default Schools;
