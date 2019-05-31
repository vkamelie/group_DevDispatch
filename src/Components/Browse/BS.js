import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Browse.css';

class BS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Schools: []
    };
  }

  componentDidMount = () => {
    this.getAllSchools();
  };

  getAllSchools = () => {
    axios.get("/schools/all").then(res => {
      this.setState({
        Schools: res.data
      });
    });
  };

  render() {
    const Schools = this.state.Schools.map(School => {
      return (
          <div>
        <Link to={`/schools/${School.id}/reviews`}>
            <div className = 'schoolList' >
              <h2>{School.name}</h2>
          <p>{School.description}</p>
            </div>
          </Link>
        </div>
      );
    });

    return <div className="Yass">{Schools}</div>;
  }
}

export default BS;
