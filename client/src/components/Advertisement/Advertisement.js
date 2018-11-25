import React from "react";

const style = {
  area: {
    "background": "lightgreen",
    "height": "400px"
  }
  
};

const Advertisement = (props) => (
 <div style={style.area}>
  
  <div>{props.company} wants to advertise</div>
 </div>
);

export default Advertisement;
