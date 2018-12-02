import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import AllAdsList from "../../components/AllAdsList";
import API from "../../utils/API";
import List from "../../components/List";


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

        <h1>Companies on file.</h1>

        <div className="row">
          <div className="col-12">


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
