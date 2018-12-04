import React from "react";
import "./ComparisonBlock.css";

// pass comparisonBlock into a .map

const ComparisonBlock = (props) => (
  <div>
    <h2 className={"text-center"}>Search to Ad Relationship.</h2>
    <ul>
      {props.detailsArray.map(details => (
        <li key={details.keywords}>
          <div className="row">
            <div className="col-4 text-center">
              <div>You Searched:</div>
              <div>{details.search}</div>
            </div>

            <div className={"col-1"}></div>

            <div className={"col-7 text-center"}>
            <div>Matched to:</div>
              <div>Company: {details.company}</div>
              {/* <div>{details.company}</div> */}
              <br/>
              <div>This Company's keywords:</div>
              <div>{details.keywords}</div>
            </div>

          </div>
          <hr/>
        </li>
      ))}

    </ul>

  </div>

);

export default ComparisonBlock;

