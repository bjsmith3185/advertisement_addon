import React from "react";
import "./AllAdsList.css";

const AllAdsList = (props) => (
  <ul>
  {props.allAds.map(company => (
    <li key={company.company}>
      <div>This is a company advertisement</div>
      <div> {company.company}
      <button onClick={() => {props.removeAd(company.company)}}>Delete</button></div>
     <div> {company.keywords}</div>
     <button onClick={() => {props.modifyAd(company.company)}}>Update</button>
    </li>
  ))}
</ul>
);

export default AllAdsList;

