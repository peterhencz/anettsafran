import React from "react";
import logo from "./logo.svg";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Resin from "./projects/Resin";
import Hurka from "./projects/Hurka";
import Bauxit from "./projects/Bauxit";
import "./App.scss";

import resin1 from "./assets/photos/resin1.jpg";
import hurka1 from "./assets/photos/hurka1.jpg";
import bauxit1 from "./assets/photos/bauxit1.jpg";

function Work() {
  return (
    <div className="Work">
      <Router>
        <NavLink to="/resin">
          <img alt="landing photos" src={resin1}></img>
        </NavLink>
        <Link to="/hurka">
          <img alt="landing photos" src={hurka1}></img>
        </Link>
        <Link to="/bauxit">
          <img alt="landing photos" src={bauxit1}></img>
        </Link>
        <Switch>
          <Route path="/resin">{Resin}</Route>
          <Route path="/bauxit">{Bauxit}</Route>
          <Route path="/hurka">{Hurka}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Work;
