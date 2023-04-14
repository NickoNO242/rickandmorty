import React from "react";
import Logo from "./wave1.svg";
import "../App.css";
const Wave1 = () => {
  return (
    <div className="big-container1">
      <div className="wave-container1">
        <img src={Logo} alt="Logo" className="down-wave"></img>
      </div>
      <div className="space1"></div>
    </div>
  );
};
export default Wave1;
