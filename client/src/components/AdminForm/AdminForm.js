import React, { Component } from "react";

const AdminForm = (props) => (

<div>
<p>Enter an advertisement below:</p>
<form className="form">
  <div>Enter the name of the company</div>
  <div>{props.title}</div>
  <input
    value={props.company}
    name="company"
    onChange={props.handleInputChange}
    type="text"
    placeholder="Company Name"
  />
  <br/>
 <div>Enter the keywords</div>
  <input
    value={props.keywords}
    name="keywords"
    onChange={props.handleInputChange}
    type="text"
    placeholder="Keywords"
  />
  <br />
 
  <button onClick={props.handleFormSubmit}>Submit</button>
</form>
</div>
);

export default AdminForm;


