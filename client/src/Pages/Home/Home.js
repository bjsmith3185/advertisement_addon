import React, { Component } from "react";
import Form from "../../components/Form";
import Nav from "../../components/Nav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";


class Home extends Component {




  render() {
    return (
      <div>
        <Nav />
        <br />

        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <h1>Advertisement Ad-on.</h1>
            </div>
          </div>
        </div>

      </div>
    );
  };
}


export default Home;
