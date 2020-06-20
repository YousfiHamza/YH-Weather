import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
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
};

export default SearchBar;
