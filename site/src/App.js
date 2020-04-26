import React from "react";
import Home from "./Home";
import Info from "./Info";
import Work from "./Work";
import Cursor from "./Cursor";
import logo from "./logo.svg";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Cursor>
      <div className="App">
        <Cursor></Cursor>
        <Router>
          <div className="Page">
            <nav className="navigation">
              <p>
                <Link className="link" to="/work">
                  WORK
                </Link>
              </p>
              <p>
                <Link className="link" to="/">
                  HOME
                </Link>
              </p>
              <p>
                <Link className="link" to="/info">
                  INFO
                </Link>
              </p>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/work">{Work}</Route>
              <Route path="/info">{Info}</Route>
              <Route path="/">{Home}</Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Cursor>
  );
}

export default App;
