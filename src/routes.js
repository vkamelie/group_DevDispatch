import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Browse from "./components/Browse/Browse";
import Advise from "./components/Advise/Advise";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Advise" component={Advise} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Browse" component={Browse} />
  </Switch>
);
