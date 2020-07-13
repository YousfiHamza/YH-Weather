import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <input
          data-city-search
          type="text"
          class="city-search"
          placeholder="Enter A Location ..."
        />
      </div>
    );
  }
}
