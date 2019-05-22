import React, { Component } from "react";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
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

  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== "/" ? <NavBar /> : <div />}
        {routes}
        <div>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
