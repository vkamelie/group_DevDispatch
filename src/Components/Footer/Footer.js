import React from "react";
import "./Footer.css";
import logo from "../NavBar/logo.png";

import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-1">
        <h2>DevDispatch</h2>
        <Link to="/">
          <p className="Name">Home</p>
        </Link>
        <div className="foot-items">
          <Link to="/Browse">
            <p className="Browse">Browse</p>{" "}
          </Link>
          <Link to="/Advise">
            <p className="Advise">Advise</p>{" "}
          </Link>

          <Link to="/Review">
            <p className="Review">Write a Review</p>{" "}
          </Link>
        </div>
      </div>
      <div className="foot-2">
        <h2>Research</h2>
        <a
          href="https://medium.freecodecamp.org/here-are-the-most-interesting-developer-podcasts-2019-edition-4e43063bf8a4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer Podcasts
        </a>
        <a
          href="https://insights.dice.com/2019/05/14/recognize-good-bad-coding-bootcamp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Good or Bad Coding Bootcamp
        </a>
        <a
          href="https://medium.freecodecamp.org/lessons-i-learned-the-first-year-after-completing-a-coding-bootcamp-4ef3800fd1f8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lessons I learned the First Year After Completing a Coding Bootcamp
        </a>
        <a
          href="https://www.codenewbie.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Newbie Podcast
        </a>
      </div>
      <div>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}
