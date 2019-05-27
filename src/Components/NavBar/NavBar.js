import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
export default function NavBar() {
  return (
    <div className="nav-Bar">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="Nav-1">
        <Link to="/">
          <h1 className="Name">DevDispatch</h1>
        </Link>
        <div className="nav-items">
          <Link to="/Browse">
            <h1 className="Browse">Browse</h1>{" "}
          </Link>
          <Link to="/Advise">
            <h1 className="Advise">Advise</h1>{" "}
          </Link>
          <Link to="/About">
            <h1 className="About">About</h1>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
