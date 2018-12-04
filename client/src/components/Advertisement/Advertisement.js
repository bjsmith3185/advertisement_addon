import React from "react";

const style = {
  box: {
    "padding": 10
  },

  area: {
    "background": "lightgreen",
    // "height": "400px"
  },

  size: {
    "height": 150,
    "width": 150
  }

};

const Advertisement = (props) => (
  <div style={style.box}>
    <div style={style.area}>

      <h3>{props.company}</h3>
      <div>
        <img style={style.size} src={props.image} />
      </div>
      <p>{props.description}</p>

      <a href={props.link}>Visit Site</a>


    </div>
  </div>
);

export default Advertisement;

// const Advertisement = (props) => (
//  <div style={style.area}>

//   <div>{props.company} wants to advertise</div>
//  </div>
// );

// export default Advertisement;
