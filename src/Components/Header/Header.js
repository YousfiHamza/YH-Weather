import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="status" id="desc">
        Enter a Location
      </div>
      <div className="location" id="region">
        To Find The Weather
      </div>
    </div>
  );
};

export default Header;
