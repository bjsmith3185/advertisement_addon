import React from "react";
import "./List.css";

const List = (props) => (
  <ol>
    {props.allAds.map(company => (
      <li key={company.company}>
        <div> {company.company} </div>
      </li>
    ))}
  </ol>
);

export default List;

