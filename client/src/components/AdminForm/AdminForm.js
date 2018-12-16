import React, { Component } from "react";

const AdminForm = (props) => (



<div>

<form className="form">
  <div>Make changes to company below.</div>
  {/* <div>{props.title}</div> */}
  <div>Current company Name: {props.previousCompany}</div>

  <input
    value={props.company}
    name="company"
    onChange={props.handleInputChange}
    type="text"
    placeholder={props.company}
  />

  <br/>
 <div>Make changes to keywords below.</div>
 <div>Current Keywords: {props.previousKeywords.join(', ')}</div>

  <input
    value={props.keywords}
    name="keywords"
    onChange={props.handleInputChange}
    type="text"
    // figure out how to display the current keywords in input box
    placeholder={props.keywords}
  />

  <br />
 
  <button onClick={props.handleFormSubmit}>Submit</button>
</form>
</div>
);

export default AdminForm;


