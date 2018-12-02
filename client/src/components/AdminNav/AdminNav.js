import React from "react";
import { PromiseProvider } from "mongoose";

const AdminNav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">


    <a className="navbar-brand" href="/">Home</a>

    <div>   Administration Page   </div>
    <div>
      <a className="navbar-brand" href="/admin/new">New Ad</a>

      <a className="navbar-brand" href="/admin/modify">Modify Ad</a>

      <a className="navbar-brand" href="/admin/business">Business Data</a>

      {/* <a className="navbar-brand" href="/admin/update">Update Ad</a> */}

      <a className="navbar-brand" href="/admin/companies">Companies</a>


    </div>
  </nav>
);

export default AdminNav;
