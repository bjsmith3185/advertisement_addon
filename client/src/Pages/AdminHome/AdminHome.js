import React, { Component } from "react";
import AdminNav from "../../components/AdminNav";
import "./AdminHome.css";


class AdminHome extends Component {

  render() {
    return (
      <div>
        <AdminNav />
        <br />
        <div className="jumbotron admin-header">
          <h1>Administration Home Page.</h1>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-6">
            <p><a href="/admin/new">Add new company advertisement.</a></p>
            <p><a href="/admin/modify">Modify/Delete/Update advertisement.</a></p>
            <p><a href="/admin/business">View company advertisement report.</a></p>
            <p><a href="/admin/searches">Modify user searches.</a></p>
            <p><a href="/admin/companies">View all advertising companies.</a></p>
            
          </div>
        </div>

      </div>
    );
  };
}


export default AdminHome;
