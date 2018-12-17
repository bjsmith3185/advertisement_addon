import React from "react";
import "./Advertisement.css";


const Advertisement = (props) => (
  <div className="advertisement-box text-center">
    
      <h3>{props.company}</h3>
      <div>
        <img alt={props.company} className="size" src={props.image} />
      </div>
      <p>{props.description}</p>

      <a href={props.link}>Visit Site</a>

  </div>
);

export default Advertisement;


