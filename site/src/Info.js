import React from "react";
import text from "./text";
import "./App.scss";

function Info() {
  return (
    <div className="Info">
      <div className="about">
        <p>{text.about_1}</p>
        <p>{text.about_2}</p>
        <p>{text.about_3}</p>
        <p>{text.about_4}</p>
      </div>
      <p className="text-saffron">{text.contact_email}</p>
      <p className="text-saffron">{text.contact_phone}</p>
    </div>
  );
}

export default Info;
