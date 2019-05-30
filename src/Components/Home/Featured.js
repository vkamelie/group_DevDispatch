import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css';


class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Featured: []
    };
  }
  componentDidMount = () => {
    this.getFeatured();
  };
  getFeatured = () => {
    axios.get("/schools/Featured").then(res => {
      console.log(res.data)
      this.setState({
        Featured: res.data.data
      });
    });
  };
  render() {

    const Featured = this.state.Featured.map(Feature => {
      return (
        <div className="FeaturedList">
          <Link to={`/schools/${Feature.id}/reviews`}>
            <div className="FeaturedMain">
<<<<<<< HEAD
              <img src ={Feature.pic}></img>
=======
              <img src={Feature.pic} alt = 'logo' />
>>>>>>> eb26c7bb8f0b133916d52b21a0337449d923f394
              <h2>{Feature.name}</h2>
            </div>
          </Link>
        </div>
      );
    });

    return <div className="Fass">
      {this.state.Featured && Featured}
    </div>;
  }
}

export default Featured;
