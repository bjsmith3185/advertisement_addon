import React, { Component } from "react";

const Form = (props) => (

<div>
<p>Enter a search</p>
<form className="form">
  <input
    value={props.searchTerm}
    name="searchTerm"
    onChange={props.handleInputChange}
    type="text"
    placeholder="Search Word"
  />
 
  <button onClick={props.handleFormSubmit}>Submit</button>
</form>
</div>
);

export default Form;


