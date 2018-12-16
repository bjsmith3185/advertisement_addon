import React, { Component } from "react";
import AdminNav from "../../components/AdminNav";
import API from "../../utils/API";
import List from "../../components/List";
import "./ViewAllCompanies.css";

class ViewAllCompanies extends Component {

  state = {
    allAds: [],

  };

  componentDidMount = () => {
    this.allAds();
  };


  allAds = () => {

    API.showAllAds()
      .then(res => {
        console.log("this is the return for getAllAds")
        console.log(res.data)
        this.setState({
          allAds: res.data
        })
      })
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
        <AdminNav />
        <br />



        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <h1 className="viewall-title text-center">Companies on file.</h1>
            <div className="viewall-subtitle text-center">Total Companies: <span className="viewall-count">{this.state.allAds.length}</span></div>

            <div>
              {this.state.allAds.length ? (
                <List
                  allAds={this.state.allAds}
                />
              ) : (
                  <h3>No Ads to Display</h3>
                )}
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default ViewAllCompanies;
