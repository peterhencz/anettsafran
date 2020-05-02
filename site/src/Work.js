import React from "react";
import logo from "./logo.svg";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LazyLoad from "react-lazy-load";
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
          <LazyLoad
            width={"30vw"}
            heigth={"auto"}
            debounce={false}
            offsetVertical={500}>
            <img className="menu_photo" alt="resin" src={resin1}></img>
          </LazyLoad>
        </NavLink>
        <Link to="/hurka">
          <LazyLoad
            width={"30vw"}
            heigth={"auto"}
            debounce={false}
            offsetVertical={500}>
            <img className="menu_photo" alt="hurka" src={hurka1}></img>
          </LazyLoad>
        </Link>
        <Link to="/bauxit">
          <LazyLoad
            width={"30vw"}
            heigth={"auto"}
            debounce={false}
            offsetVertical={500}>
            <img className="menu_photo" alt="bauxit" src={bauxit1}></img>
          </LazyLoad>
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
