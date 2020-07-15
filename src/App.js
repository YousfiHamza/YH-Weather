import React from "react";
import "./App.css";
import Card from "./Components/Card/Card.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="app" id="bg">
        <Card />
      </div>
    );
  }
}
