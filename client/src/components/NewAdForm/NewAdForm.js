import React, { Component } from "react";

const NewAdForm = (props) => (

  <div>

    <form className="form">
      <div>Enter the name of the Company.</div>
      <input
        value={props.company}
        name="company"
        onChange={props.handleInputChange}
        type="text"
        placeholder="Company Name"
      />

      <br />

      <div>Enter keywords.</div>
      <input
        value={props.keywords}
        name="keywords"
        onChange={props.handleInputChange}
        type="text"
        // figure out how to display the current keywords in input box
        placeholder="keywords"
      />
      <br />

      <button onClick={props.handleFormSubmit}>Submit</button>
    </form>
  </div>
);

export default NewAdForm;


