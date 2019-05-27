
import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MakeReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      schoolName: "",
      title: "",
      description: "",
      location: "",
      course: "",
      position: "",
      month: "",
      year: ""
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      console.log(res.data);
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
      year
    };
    axios
      .post(`/api/schools/${id}/reviews`, obj)
      .then(res => {
        this.setState({ reviews: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      schoolName,
      title,
      description,
      location,
      course,
      position,
      month,
      year
    } = this.state;
    console.log(
      schoolName,
      title,
      description,
      location,
      course,
      position,
      month,
      year,
      "new State inputs"
    );
    this.addReview(
      schoolName,
      title,
      description,
      location,
      course,
      position,
      month,
      year
    );
  };

  render() {
    console.log(this.state, "hey state");
    const {
      schoolName,
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
            Post clear, valuable, and honest information that will be useful and
            informative to future coding bootcampers. Think about what your
            bootcamp excelled at and what might have been better.
          </li>
          <li>Be nice to others; don't attack others.</li>
          <li>Use good grammar and check your spelling.</li>
          <li>
            Don't post reviews on behalf of other students or impersonate any
            person, or falsely state or otherwise misrepresent your affiliation
            with a person or entity.
          </li>
          <li>
            Don't spam or post fake reviews intended to boost or lower ratings.
          </li>
          <li>Don't post or link to content that is sexually explicit.</li>
          <li>
            Don't post or link to content that is abusive or hateful or
            threatens or harasses others.
          </li>
          <li>
            Please do not submit duplicate or multiple reviews. These will be
            deleted.
          </li>
          <li>
            Please note that we reserve the right to review and remove
            commentary that violates our policies.
          </li>
        </ul>
        <h3>You must log in to submit a review.</h3>
        <Link to="Review">
          <button onClick={this.login}>Login in to Leave a Review</button>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <h3>Which school are you reviewing?</h3>
          <input
            list="schools"
            name="schoolName"
            value={schoolName}
            onChange={this.changeHandler}
          />
          <datalist id="schools">
            <option value="App Acedemy">App Acedemy</option>
            <option value="Austin Coding Academy">Austin Coding Academy</option>
            <option value="Actualize">Actualize</option>
            <option value="General Assembly">General Assembly</option>
            <option value="Washington University Data Analytics Boot Camp">
              Washington University Data Analytics Boot Camp
            </option>
            <option value="Wagner College">Wagner College</option>
            <option value="UWM School of Continuing Education Coding Bootcamp">
              UWM School of Continuing Education Coding Bootcamp
            </option>
            <option value="Untapped Code Academy">Untapped Code Academy</option>
            <option value="University of Wisconsin Extended Campus Coding Boot Camp">
              University of Wisconsin Extended Campus Coding Boot Camp
            </option>
            <option value="University of Oregon Coding Boot Camp">
              University of Oregon Coding Boot Camp
            </option>
          </datalist>

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
            <label>Campus Location</label>
            <input
              name="location"
              value={location}
              onChange={this.changeHandler}
            />
            <label>Course</label>
            <input name="course" value={course} onChange={this.changeHandler} />
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
            <select name="month" value={month} onChange={this.changeHandler}>
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
          <div>RATING BOX</div>

          <h3>You must log in to submit a review.</h3>
          <Link to="Review">
            <h3 onClick={this.login}>Click here to log in</h3>
          </Link>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MakeReview;
