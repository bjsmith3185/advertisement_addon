import React from "react";
import "./AllKeywordsList.css";

const AllKeywordsList = (props) => (
  <div className="info-box" key={props.keyword}>
    <p className=" info-title text-center">Enter one of these words to activate an advertisement.</p>
    <ul>
      {props.allKeywords.map(key => (
        <li className="info-keyword" key={key}>
          {key}
        </li>
      ))}
    </ul>
  </div>
);

export default AllKeywordsList;

