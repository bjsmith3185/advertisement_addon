import React from "react";
import "./SearchBody.css";

const SearchBody = (props) => (

  <div>
    <p>This is the term you searched</p>
    <div >{props.result}</div>
  </div>
  
);

export default SearchBody;

