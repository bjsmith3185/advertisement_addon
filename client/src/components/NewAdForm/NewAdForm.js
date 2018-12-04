import React, { Component } from "react";

const NewAdForm = (props) => (

  <div>
    <h3>Enter new advertisement information in the form below.</h3>

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

      <div>Enter company image url.</div>
      <input
        value={props.image}
        name="image"
        onChange={props.handleInputChange}
        type="text"
        placeholder="image url"
      />
      <br />

      <div>Enter company url.</div>
      <input
        value={props.link}
        name="link"
        onChange={props.handleInputChange}
        type="text"
        placeholder="company url"
      />
      <br />

      <div>Enter ad description.</div>
      <input
        value={props.description}
        name="description"
        onChange={props.handleInputChange}
        type="text"
        placeholder="description"
      />
      <br />

      <button onClick={props.handleFormSubmit}>Submit</button>
    </form>
  </div>
);

export default NewAdForm;


