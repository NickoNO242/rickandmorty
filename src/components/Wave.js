import React from "react";
import Logo from "./wave.svg";
import "../App.css";
const Wave = () => {
  return (
      <div className="big-container">
        <div className="space">
      </div>
        <div className="wave-container">
          <img src={Logo} alt="Logo" className="Up-wave"></img>
        </div>
      </div>
  );
};
export default Wave;
