import React, { Component } from "react";
import "./AdminForm.css";

const AdminForm = (props) => (



  <div>
    <div className="adminform-title text-center">Make changes to the advertisement below.</div>
    <form className="form">

      <div className="adminform-label">Current company Name:
      <span className="adminform-prop">{props.previousCompany}</span></div>

      <div className="adminform-co-name">
        <input className="adminform-input"
          value={props.company}
          name="company"
          onChange={props.handleInputChange}
          type="text"
          placeholder={props.company}
        />
      </div>


      <br />
      <div className="adminform-label">Make changes to keywords below.</div>
      <div className="adminform-label">Current Keywords: <span className="adminform-prop">{props.previousKeywords.join(', ')}</span></div>

      <input className="adminform-input"
        value={props.keywords}
        name="keywords"
        onChange={props.handleInputChange}
        type="text"
        placeholder={props.keywords}
      />

      <br />

      <button onClick={props.handleFormSubmit}>Submit</button>
    </form>
  </div>
);

export default AdminForm;


