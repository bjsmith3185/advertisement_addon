import React from "react";
import "./ResetData.css";

const ResetData = (props) => (
  <div>
    <div className="reset-box">
      <h3 className="text-center">The following data was modified.</h3>
      <div className="result-item">Number of user searches removed: {props.searches}.</div>
      <div className="result-item">Number of search to ad details removed: {props.details}.</div>
      <div className="result-item">Number of custom user ads removed: {props.userads}.</div>
    </div>

  </div>
);

export default ResetData;

