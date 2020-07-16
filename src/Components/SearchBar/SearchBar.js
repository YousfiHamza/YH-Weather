import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <input
          id="data-city-search"
          type="text"
          class="city-search"
          placeholder="Enter A Location ..."
        />
        <span className="deleteBtn">
          <i
            class="far fa-times-circle"
            onClick={() =>
              (document.getElementById("data-city-search").value = "")
            }
          />
        </span>
      </div>
    );
  }
}
