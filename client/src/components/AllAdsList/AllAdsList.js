import React from "react";
import "./SearchBody.css";

const AllAdsList = (props) => (
  <ul>
  {props.allAds.map(company => (
    <li key={company.company}>
      <div>This is a company advertisement</div>
      <div> {company.company}
      <button onClick={props.remove}>Delete</button></div>
     <div> {company.keywords}</div>
     <button onClick={props.updateCompany}>Update</button>
    </li>
  ))}
</ul>
);

export default AllAdsList;

{/* <ul>
{this.state.allAds.map(company => (
  <li key={company.company}>
    <div>This is a company advertisement</div>
    <div> {company.company}</div>
   <div> {company.keywords}</div>
  </li>
))}
</ul> */}