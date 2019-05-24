import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-1">
        <h2>DevDispatch</h2>
        <Link to="/">
          <h2 className="Name">Home</h2>
        </Link>
        <div className="foot-items">
          <Link to="/Browse">
            <h2 className="Browse">Browse</h2>{" "}
          </Link>
          <Link to="/Advise">
            <h2 className="Advise">Advise</h2>{" "}
          </Link>
          <Link to="/About">
            <h2 className="About">About</h2>{" "}
          </Link>
          <Link to="/About">
            <h2 className="About">Write a Review</h2>{" "}
          </Link>
        </div>
      </div>
      <div className="foot-2">
      <h2>Research</h2>
        <Link to="/About">
          <h2 className="Article">Article</h2>{" "}
        </Link>
        <Link to="/About">
          <h2 className="Article">Article</h2>{" "}
        </Link>
        <Link to="/About">
          <h2 className="Article">Article</h2>{" "}
        </Link>
        <Link to="/About">
          <h2 className="Article">Article</h2>{" "}
        </Link>
        <Link to="/About">
          <h2 className="Article">Article</h2>{" "}
        </Link>
      </div>
      <h1>DEVDISPATCH</h1>
    </div>
  );
}
