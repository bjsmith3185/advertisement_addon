import React, { Component } from "react";
import "./AdminForm.css";

const AdminForm = (props) => (



  <div>
    <div className="adminform-title text-center">Make changes to the advertisement below.</div>
    <form className="form">

      <div className="adminform-entry">
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
      </div>

      {/* <br /> */}

      <div className="adminform-entry">
        {/* <div className="adminform-label">Make changes to keywords below.</div> */}
        <div className="adminform-label">Current Keywords: <span className="adminform-prop">{props.displayKeywords}</span></div>

        <input className="adminform-input"
          value={props.keywords}
          name="keywords"
          onChange={props.handleInputChange}
          type="text"
          placeholder={props.keywords}
        />
      </div>
      {/* <br /> */}


      <div className="adminform-entry">
        {/* <div className="adminform-label">Make changes to the image below.</div> */}
        <div className="row">
          <div className="col-1"></div>

          <div className="col-3">
            {/* current image  */}
            <div className="text-center">Current Image</div>
            <img className="adminform-prev-img" src={props.previousImage} />
          </div>

          <div className="col-2"></div>

          <div className="col-3">
            <div className="text-center">New Image</div>
            <img className="adminform-new-img" src={props.image} />
          </div>

        </div>


        <input className="adminform-input"
          value={props.image}
          name="image"
          onChange={props.handleInputChange}
          type="text"
          placeholder="paste new image url"
        />
      </div>

      {/* <br /> */}
      <div className="adminform-entry">
        <div className="adminform-label">Current Website link:
         <span className="adminform-prop">{props.previousLink}</span></div>

        <div className="adminform-label">
          <input className="adminform-input"
            value={props.link}
            name="link"
            onChange={props.handleInputChange}
            type="text"
            placeholder={props.link}
          />
        </div>
      </div>
      {/* <br /> */}

      <div className="adminform-entry">
        <div className="adminform-label">Current Description:
          <span className="adminform-prop">{props.previousDescription}</span></div>

        <div className="adminform-label">
          <input className="adminform-input"
            value={props.description}
            name="description"
            onChange={props.handleInputChange}
            type="text"
            placeholder={props.description}
          />
        </div>
      </div>

      <button className="adminform-btn btn btn-info" onClick={props.handleFormSubmit}>Submit</button>
    </form>
  </div>
);

export default AdminForm;


