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
      <div className="advise-main">
        <h2>Articles</h2>
        <div className="articles">
          <div>
            <a
              href="http://ryanscowles.com/2013/04/web-developers-and-the-impostor-syndrome/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {IS}
              <h3>Imposter Syndrome</h3>
            </a>
          </div>
          <div>
            <a
              href="https://medium.freecodecamp.org/lessons-i-learned-the-first-year-after-completing-a-coding-bootcamp-4ef3800fd1f8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {YearFirst}
            </a>
          </div>
          <div>
            <a
              href="https://insights.dice.com/2019/05/14/recognize-good-bad-coding-bootcamp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CBR}
            </a>
          </div>

          <div>
            <a
              href="https://medium.freecodecamp.org/here-are-the-most-interesting-developer-podcasts-2019-edition-4e43063bf8a4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {PCA}
            </a>
          </div>
        </div>
        <div className="podcasts">
          <h2>Podcasts</h2>
          <div>
            <a
              href="https://www.codingblocks.net/category/podcast/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {blocks}
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://www.codenewbie.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {CodeNew}
          </a>
        </div>
        <div>
          <a
            href="https://syntax.fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {TAX}
          </a>{" "}
        </div>
        <div>
          <a
            href="https://spec.fm/podcasts/developer-tea"
            target="_blank"
            rel="noopener noreferrer"
          >
            {TEA}{" "}
          </a>
        </div>
        <div className="local">
          <h2>Get Involved Locally </h2>
          <div>
            <a
              href="https://www.toastmasters.org/find-a-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Toast}
            </a>
          </div>
          <div>
            <a
              href="https://www.meetup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {meet}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Advise;
