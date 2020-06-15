import React from "react";
import "./Card.css";
import Header from "../Header/Header";
import Details from "../Details/Details";
import SearchBar from "../SearchBar/SearchBar";

const Card = () => {
  return (
    <div className="card">
      Hello from Card
      <Header />
      <SearchBar />
      <Details />
    </div>
  );
};

export default Card;
