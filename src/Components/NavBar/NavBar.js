import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from "./logo.png";
export default function NavBar() {
  return (
    <div className="nav-Bar">
      <div className="Nav-1">
  
        <div className="nav-items">
        <Link to="/">
        <img src={logo} alt="Logo" /></Link>
          {/* <Link to="/">
            <h1 className="Name">DevDispatch</h1>
          </Link> */}
          <Link to="/Browse">
            <h1 className="Browse">Browse</h1>{" "}
          </Link>
          <Link to="/Advise">
            <h1 className="Advise">Advise</h1>{" "}
          </Link>
          <Link to="/Review">
            <h1 className="Review">Write a Review</h1>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
