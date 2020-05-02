import React from "react";
import "./App.scss";

import landing_photo from "./assets/photos/resin1.jpg";

function Home() {
  return (
    <div className="Home">
      <img className="landing-photo" alt="landing" src={landing_photo}></img>
    </div>
  );
}

export default Home;
