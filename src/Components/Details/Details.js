import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="detail">
        <div className="title">
          <i class="fas fa-temperature-low" /> Temp. Low
        </div>
        <div className="value">N/A Celsius</div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-temperature-high" /> Temp. Hight
        </div>
        <div className="value">N/A Celsius</div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-wind" /> Wind Speed
        </div>
        <div className="value">N/A Kilometers/Hour</div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-cloud-sun-rain" /> Precipit. Proba.
        </div>
        <div className="value">N/A %</div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="fas fa-sun" /> SunRise
        </div>
        <div className="value">N/A</div>
      </div>
      <div className="detail">
        <div className="title">
          <i class="far fa-sun" /> SunDown
        </div>
        <div className="value">N/A</div>
      </div>
    </div>
  );
};

export default Details;
