import React, { Component } from "react";

import "./Advise.css";
import {
  YearFirst,
  CBR,
  PCA,
  blocks,
  TEA,
  TAX,
  CodeNew,
  meet,
  Toast,
  IS
} from "./AdvisePhotos/AdvisePhotos";

class Advise extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="local">
          <h2>Get Involved Locally </h2>
          <div className="box">
            <div className="link">
              <a
                href="https://www.toastmasters.org/find-a-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Toast}
                <p>Improve Your Public Speaking Skills</p>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="link">
              <a
                href="https://www.meetup.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {meet}
                <p>Join Local Coding Meet Ups</p>
              </a>
            </div>
          </div>
        </div>

        <div className="articles">
          <h2>Articles</h2>
          <div className="box">
            <div className="link">
              <a
                href="http://ryanscowles.com/2013/04/web-developers-and-the-impostor-syndrome/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {IS}
                <p>Web Developers and the Imposter Syndrome</p>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="link">
              <a
                href="https://medium.freecodecamp.org/lessons-i-learned-the-first-year-after-completing-a-coding-bootcamp-4ef3800fd1f8"
                target="_blank"
                rel="noopener noreferrer"
              >
                {YearFirst}
                <p>
                  Lessons I learned the First Year After Completing a Coding
                  Bootcamp
                </p>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="link">
              <a
                href="https://insights.dice.com/2019/05/14/recognize-good-bad-coding-bootcamp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CBR}
                <p>How to Recognize a Good or Bad Coding Bootcamp</p>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="link">
              <a
                href="https://medium.freecodecamp.org/here-are-the-most-interesting-developer-podcasts-2019-edition-4e43063bf8a4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {PCA}
                <p>Developer Podcasts</p>
              </a>
            </div>
          </div>
        </div>
        <div className="podcasts">
          <h2>Podcasts</h2>
          <div className="box">
            <div className="link">
              <a
                href="https://www.codingblocks.net/category/podcast/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {blocks}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="link">
              <a
                href="https://www.codenewbie.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {CodeNew}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="link">
              <a
                href="https://syntax.fm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {TAX}
              </a>{" "}
            </div>
          </div>
          <div className="box">
            <div className="link">
              <a
                href="https://spec.fm/podcasts/developer-tea"
                target="_blank"
                rel="noopener noreferrer"
              >
                {TEA}{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Advise;
