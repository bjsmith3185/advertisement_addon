import React from "react";
import "./ResetData.css";

const ResetData = (props) => (
  <div>
    <div className="reset-box">
      <h3 className="text-center">The following data was modified.</h3>
      <div className="result-item">Searches Removed:<span className="resetdata-qty">{props.searches}</span></div>
      <div className="result-item">Search/Ads Matches Removed:<span className="resetdata-qty">{props.details}</span></div>
      <div className="result-item">User Custom Ads Removed:<span className="resetdata-qty">{props.userads}</span></div>
    </div>

  </div>
);

export default ResetData;


