import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import landing_photo from "./assets/photos/resin1.jpg";

function Home() {
  return (
    <div className="Home">
      <img alt="landing photos" src={landing_photo}></img>
    </div>
  );
}

export default Home;
