import React from "react";
import { PromiseProvider } from "mongoose";

const AdminNav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div>Administrator Page</div>
    <a className="navbar-brand" href="/">
      Home Page
    </a>
    <a className="navbar-brand" href="/admin">
      Admin Page
    </a>

    <div>
    
      <button onClick={props.newAd}>Enter New Ad</button>
      {/* <button onClick={props.allAds}>View All Ads</button> */}
     <a className="navbar-brand" href="/admin/all">
     Show All Ads
    </a>
      
    </div>
  </nav>
);

export default AdminNav;
