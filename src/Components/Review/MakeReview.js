import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

class MakeReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      title: "",
      description: "",
      location: "",
      course: "",
      position: "",
      month: "",
      year: "",
      rate: 1,
      isLoggedIn: null
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      if(res.data){
        this.setState({
          isLoggedIn: true
        })
      }
    });
  }

  login() {
    const redirectUri = encodeURIComponent(
      `${window.location.origin}/auth/callback`
    );
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  }

  changeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addReview = (
    schoolName,
    title,
    description,
    location,
    course,
    position,
    month,
    year
  ) => {
    let obj = {
      schoolName,
      title,
      description,
      location,
      course,
      position,
      month,
      year,
      id: this.props.id
    };
    axios
      .post(`/api/schools/${this.props.id}/reviews`, obj)
      .then(res => {})
      .catch(function(error) {
        console.log(error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      title,
      description,
      location,
      course,
      position,
      month,
      year,
      rate
    } = this.state;

    const obj = {
      schoolName: this.props.name,
      title,
      description,
      location,
      course,
      position,
      month,
      year,
      rate,
      id: this.props.id
    };

    axios
      .post(`/schools/${this.props.id}/reviews`, obj)
      .then(res => {
        console.log(res.data);
      })
      .catch(function(error) {
        alert('You must be logged in to do that')
      });
  };

  render() {
    const {
      title,
      description,
      location,
      course,
      position,
      month,
      year
    } = this.state;
    return (
      <div>
        <ul>
          Review Guidelines
          <li>
            Only Applicants, Students, and Graduates are permitted to leave
            reviews on DevDispatch.
          </li>
          <li>
            Post clear, valuable, and honest information that will be useful
            and informative to future coding bootcampers. Think about what
            your bootcamp excelled at and what might have been better.
          </li>
          <li>Be nice to others; don't attack others.</li>
          <li>Use good grammar and check your spelling.</li>
          <li>
            Don't post reviews on behalf of other students or impersonate
            any person, or falsely state or otherwise misrepresent your
            affiliation with a person or entity.
          </li>
          <li>
            Don't spam or post fake reviews intended to boost or lower
            ratings.
          </li>
          <li>Don't post or link to content that is sexually explicit.</li>
          <li>
            Don't post or link to content that is abusive or hateful or
            threatens or harasses others.
          </li>
          <li>
            Please do not submit duplicate or multiple reviews. These will
            be deleted.
          </li>
          <li>
            Please note that we reserve the right to review and remove
            commentary that violates our policies.
          </li>
        </ul>
       {!this.state.isLoggedIn && <h3>You must <span style = {{color: 'blue', cursor: 'pointer'}} onClick = {this.login}>log in</span> to submit a review.</h3>}
        {this.state.isLoggedIn && (
           <form onSubmit={this.handleSubmit}>
          <h3>Title</h3>
          <input name="title" value={title} onChange={this.changeHandler} />
          <h3>Description</h3>
          <textarea
            name="description"
            value={description}
            onChange={this.changeHandler}
          />

          <div>
            <h3>School Details</h3>
            <label>Course</label>
            <select
              name="course"
              value={course}
              onChange={this.changeHandler}
            >
              <option value="Select Course">Select Course</option>
              {this.props.courses.map(course => {
                return <option value={course.name}>{course.name}</option>;
              })}
            </select>

            <label>Campus Location</label>
            <select
              name="location"
              value={location}
              onChange={this.changeHandler}
            >
              {this.props.courses
                .filter(course => course.name == this.state.course)
                .map(otherCourse => {
                  return otherCourse.locations.map(location => {
                    return <option value={location}>{location}</option>;
                  });
                  //I am so sorry. I know this is messy. But it works!!
                })}
            </select>
            <select
              name="position"
              value={position}
              onChange={this.changeHandler}
            >
              <option value="Student">Student</option>
              <option value="Graduate">Graduate</option>
              <option value="Applicant">Applicant</option>
              <option value="School Affiliation">School Affiliation</option>
            </select>
            <label>Time of Course</label>
            <select
              name="month"
              value={month}
              onChange={this.changeHandler}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <select name="year" value={year} onChange={this.changeHandler}>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2021">2022</option>
              <option value="2021">2023</option>
            </select>
          </div>

          <h3>Rating</h3>
          <select name="rate" onChange={this.changeHandler}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        )}
      </div>
    );
  }
}

export default withRouter(MakeReview);
