import React, { Component } from "react";
import "./SearchResultsToolbar.css";

const SearchResultsToolbar = (props) => (

<div>

  <div onClick={props.clearSearchHistory}>Clear Search History</div>

</div>
);

export default SearchResultsToolbar;


