import React from "react";
import logo from "./logo.svg";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Resin from "./projects/Resin";
import Hurka from "./projects/Hurka";
import Bauxit from "./projects/Bauxit";
import "./App.scss";

import resin1 from "./assets/photos/resin1.jpg";
import hurka1 from "./assets/photos/hurka1.jpg";
import bauxit1 from "./assets/photos/bauxit1.jpg";

const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" },
];

function Image({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color,
      }}
    />
  );
}

function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
}

function Work() {
  return (
    <div className="Main">
      <div className="Work">
        <Router>
          <Link to="/work/resin">
            <LazyLoad
              width={"30vw"}
              heigth={"auto"}
              debounce={false}
              offsetVertical={500}>
              <img className="menu_photo" alt="resin" src={resin1}></img>
            </LazyLoad>
          </Link>
          <Link to="/work/hurka">
            <LazyLoad
              width={"30vw"}
              heigth={"auto"}
              debounce={false}
              offsetVertical={500}>
              <img className="menu_photo" alt="hurka" src={hurka1}></img>
            </LazyLoad>
          </Link>
          <Link to="/work/bauxit">
            <LazyLoad
              width={"30vw"}
              heigth={"auto"}
              debounce={false}
              offsetVertical={500}>
              <img className="menu_photo" alt="bauxit" src={bauxit1}></img>
            </LazyLoad>
          </Link>
          <Switch>
            <Route path="/work/resin">{Resin}</Route>
            <Route path="/work/bauxit">{Bauxit}</Route>
            <Route path="/work/hurka">{Hurka}</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Work;
