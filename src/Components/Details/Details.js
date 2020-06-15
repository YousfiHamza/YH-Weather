import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details">
      Hello from Details
      <div className="detail">
        <div className="title">Temp. Low</div>
        <div className="value">N/A</div>
      </div>
      <div className="detail">
        <div className="title">Temp. Hight</div>
        <div className="value">N/A</div>
      </div>
      <div className="detail">
        <div className="title">Wind Speed</div>
        <div className="value">N/A</div>
      </div>
      <div className="detail">
        <div className="title">Precipit. Proba.</div>
        <div className="value">N/A</div>
      </div>
      <div className="detail">
        <div className="title">SunRise</div>
        <div className="value">N/A</div>
      </div>
      <div className="detail">
        <div className="title">SunDown</div>
        <div className="value">N/A</div>
      </div>
    </div>
  );
};

export default Details;
