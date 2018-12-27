import React from "react";
import "./BusinessData.css";
import Advertisement from "../../components/Advertisement";

const BusinessData = (props) => (

  <div className="row">
    <div className="col-5 text-center">
      <div className="businessdata-ad text-center">
        <Advertisement
          company={props.company}
          image={props.image}
          description={props.description}
          link={props.link}
        />
      </div>
    </div>
    <div className="col-6">
      <div className="businessdata-count">
        <div className="random-count=title">Ad was displayed Randomly:
          <span className="random-count"> {props.random}</span>
        </div>

        <div className="custom-count=title">Ad was displayed Selectively:
          <span className="custom-count"> {props.custom}</span>
        </div>
      </div>
    </div>
  </div>

);

export default BusinessData;




