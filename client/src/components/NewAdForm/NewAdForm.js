import React from "react";
import "./NewAdForm.css";
import Advertisement from "../Advertisement";

const NewAdForm = (props) => (

  <div>
    <form className="form">
      <div className="row">
        <div className="col-7">
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

        </div>

        <div className="col-2"></div>
        <div className="col-3 text-center">

          <div className="newadform-ad-img">
            <Advertisement
              company={props.company}
              image={props.image}
              description={props.description}
              link={props.link}
            />

          </div>

        </div>
      </div>

    </form>
  </div>
);

export default NewAdForm;


