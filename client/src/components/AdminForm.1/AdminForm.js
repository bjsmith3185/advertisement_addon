import React, { Component } from "react";

const AdminForm = (props) => (

<div>

<form className="form">
  <div>Make changes to company name below.</div>
  <div>{props.title}</div>
  <input
    value={props.company}
    name="company"
    onChange={props.handleInputChange}
    type="text"
    placeholder="Company Name"
  />
  <br/>
 <div>Make changes to keywords below.</div>
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


