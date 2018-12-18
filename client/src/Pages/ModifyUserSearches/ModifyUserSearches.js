import React, { Component } from "react";
import AdminNav from "../../components/AdminNav";
import API from "../../utils/API";
import "./ModifyUserSearches.css";
import ResetData from "../../components/ResetData";


class ModifyUserSearches extends Component {

  state = {
    searches: "",
    details: "",
    userads: "",
    showResults: false,
  };


  clearSearches = () => {

    API.clearUserSearches()
      .then(res => {
        this.setState({
          searches: res.data.searches,
          details: res.data.details,
          userads: res.data.customads,
          showResults: true,
        })

      })
      .catch(err => console.log(err));
  };

  returnHome = () => {
    this.props.history.push("/admin");
  };


  render() {
    return (
      <div>
        <AdminNav />
        <br />
        <br />

        <h2 className="text-center">
          This will remove all searches and reset custom advertisements.
        </h2>
        <br />
        <br />
        <div className="row">

          <div className="col-2"></div>

          <div className="col-4 text-center">
            <button className="btn btn-primary" onClick={this.clearSearches}>Clear Searches</button>

            {this.state.showResults ? (
              <div className="return">
                <button className="btn  return-home" onClick={this.returnHome}>Admin Home</button>
              </div>

            ) : (
                <div></div>
              )}
          </div>

          <div className="col-4">

            {this.state.showResults ? (
              <ResetData
                searches={this.state.searches}
                details={this.state.details}
                userads={this.state.userads}
              />
            ) : (
                <div></div>
              )}

          </div>

        </div>

      </div>

    );
  };
}


export default ModifyUserSearches;





