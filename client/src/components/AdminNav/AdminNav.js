import React from "react";
import "./AdminNav.css";

const AdminNav = () => (
  <nav className=" nav-background navbar navbar-expand-lg navbar-dark ">


    <a className="navbar-brand" href="/">Home</a>

    <a className="navbar-brand" href="/search">Search</a>

    <div className="admin-title-nav">   Administration Page   </div>
    <div>
      <a className="navbar-brand" href="/admin/new">New Ad</a>

      <a className="navbar-brand" href="/admin/modify">Modify Ad</a>

      <a className="navbar-brand" href="/admin/business">Business Data</a>

      <a className="navbar-brand" href="/admin/searches">Clear Searches</a>

      <a className="navbar-brand" href="/admin/companies">Companies</a>


    </div>
  </nav>
);

export default AdminNav;
