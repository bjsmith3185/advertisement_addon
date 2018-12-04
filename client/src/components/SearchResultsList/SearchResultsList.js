import React from "react";
import "./SearchResultsList.css";

const SearchResultsList = (props) => (
  <div>
    <h2>Previous Searches</h2>
  <ul>
    {props.previousSearches.map(search => (
      <li key={search.search}>
        <div> {search.search} </div>
      </li>
    ))}
  </ul>
  </div>
);

export default SearchResultsList;

