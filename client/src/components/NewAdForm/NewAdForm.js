import React, { Component } from "react";
import "./NewAdForm.css";

const NewAdForm = (props) => (

  <div>
    <form className="form">

      <div className="newadform-label">Enter the name of the Company.</div>

      <input className="newadform-input"
        value={props.company}
        name="company"
        onChange={props.handleInputChange}
        type="text"
        placeholder="Company Name"
      />

      <br />

      <div className="newadform-label">Enter keywords.</div>
      <input className="newadform-input"
        value={props.keywords}
        name="keywords"
        onChange={props.handleInputChange}
        type="text"
        // figure out how to display the current keywords in input box
        placeholder="keywords"
      />
      <br />

      <div className="newadform-label">Enter company image url.</div>
      <input className="newadform-input"
        value={props.image}
        name="image"
        onChange={props.handleInputChange}
        type="text"
        placeholder="image url"
      />
      <br />

      <div className="newadform-label">Enter company url.</div>
      <input className="newadform-input"
        value={props.link}
        name="link"
        onChange={props.handleInputChange}
        type="text"
        placeholder="company url"
      />
      <br />

      <div className="newadform-label">Enter ad description.</div>
      <input className="newadform-input"
        value={props.description}
        name="description"
        onChange={props.handleInputChange}
        type="text"
        placeholder="description"
      />
      <br />

      <button className="btn btn-info" onClick={props.handleFormSubmit}>Submit</button>
    </form>
  </div>
);

export default NewAdForm;


