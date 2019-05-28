import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Browse from "./components/Browse/Browse";
import Advise from "./components/Advise/Advise";

import Review from "./components/Review/MakeReview";
import Schools from "./components/Schools/Schools";

export default (
  <Switch>
    <Route exact path="/" component={Home} />


    <Route path="/Advise" component={Advise} />

    <Route path="/Browse" component={Browse} />
    <Route path="/Review" component={Review} />
    <Route path="/Schools" component={Schools} />

    <Route  path="/Advise" component={Advise} />
    <Route  path="/About" component={About} />
    <Route  path="/Browse" component={Browse} />
    <Route  path="/Review" component={Review} />
    <Route  path="/schools/:id/reviews" component={Schools} />

  </Switch>
);
