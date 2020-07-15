import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="detail">
        <div className="title">
          <i class="fas fa-temperature-low" /> Temp. Low
        </div>
        <div className="value" id="tempLow">
          N/A
        </div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-temperature-high" /> Temp. High
        </div>
        <div className="value" id="tempHigh">
          N/A
        </div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-wind" /> Wind Speed
        </div>
        <div className="value" id="windSpeed">
          N/A
        </div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-cloud-sun-rain" /> Precipit. Prob.
        </div>
        <div className="value" id="precipProb">
          N/A
        </div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-sun" /> SunRise
        </div>
        <div className="value" id="sunRise">
          N/A
        </div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="far fa-sun" /> SunDown
        </div>
        <div className="value" id="sunDown">
          N/A
        </div>
      </div>
    </div>
  );
};

export default Details;
