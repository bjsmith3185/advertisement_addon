import React, { Component } from "react";
import Form from "../../components/Form";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";


class AdminHome extends Component {




  render() {
    return (
      <div>
        <AdminNav />
        <br />

        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <h1>Administration Home Page.</h1>
            </div>
          </div>
        </div>

      </div>
    );
  };
}


export default AdminHome;
