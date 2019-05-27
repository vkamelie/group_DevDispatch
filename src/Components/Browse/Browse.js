import React, { Component } from "react";
import axios from "axios";
import BS from "./BS";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Schools: []
    };
  }
  render() {
    return (
      <div className="main">
        <div className="Featured">Featured Schools </div>
        <div className="schoolList">
          <BS />
        </div>
        <div className="SideTab2" />

      </div>
    );
  }
}

export default Browse;
