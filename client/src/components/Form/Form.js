import React, { Component } from "react";
import "./Form.css";

const Form = (props) => (

  <div className="background-area">
    <div className="row">
      <div className="col-2"></div>
      <div className="col-6">
        <h3>Enter a Search Word.</h3>
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
    </div>

  </div>
);

export default Form;


{/* <p>Enter a search</p>
    <form className="form">
      <input
        value={props.searchTerm}
        name="searchTerm"
        onChange={props.handleInputChange}
        type="text"
        placeholder="Search Word"
      />

      <button onClick={props.handleFormSubmit}>Submit</button>
    </form> */}