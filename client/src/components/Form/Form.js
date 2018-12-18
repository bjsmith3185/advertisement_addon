import React from "react";
import "./Form.css";

const Form = (props) => (

  <div className="background-area">
    <div className="row">
      <div className="col-2"></div>
      <div className="col-6">
        <div className="form-title">Enter a Search Word.</div>

          <input className="form-input"
            value={props.searchTerm}
            name="searchTerm"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search Word"
          />
          <br/>
          <button className="form-btn btn btn-info" onClick={props.handleFormSubmit}>Submit</button>

      </div>
    </div>

  </div>
);

export default Form;

