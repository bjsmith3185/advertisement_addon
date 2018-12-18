import React from "react";
import "./ComparisonBlock.css";

const ComparisonBlock = (props) => (

  <div>
    <div className="comparison-title text-center">Search to Ad Relationship.</div>
    <ul>
      {props.detailsArray.map(details => (
        <li key={details.keywords}
        className="comparison-result"
        >
          <div className="row">
            <div className="col-4 text-center">
              <div>You Searched:</div>
              <div className="comparison-word">{details.search}</div>
            </div>

            <div className={"col-1"}></div>

            <div className={"col-7 text-center"}>
            <div>Search Matched:</div>
              <div className="comparison-company">{details.company}</div>
      
              <div className="comparison-keywords-title">This Company's keywords:</div>
              <div className="comparison-keywords">{details.keywords.join(', ')}</div>
            </div>

          </div>

        </li>
      ))}

    </ul>
  </div>

);

export default ComparisonBlock;

