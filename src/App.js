import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card.js";

function App() {
  return (
    <div className="app">
      <Card />
      <a
        href="https://darksky.net/powerdby"
        target="_blank"
        class="darksky-logo"
      >
        Powered By DarkSky
      </a>
    </div>
  );
}

export default App;
