import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card.js";

function App() {
  return (
    <div className="body">
      Hello From App
      <Card />
      <a href="https://darksky.net/powerdby" class="darksky-logo">
        Powered By DarkSky
      </a>
    </div>
  );
}

export default App;
