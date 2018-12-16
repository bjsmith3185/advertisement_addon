import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import AllAdsList from "../../components/AllAdsList";

import API from "../../utils/API";
import "./ModifyUserSearches.css";

// import DropdownList from '../../components/Dropdown/flatArrayExample.js';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import MyDropdown from "../../components/MyDropdown/MyDropdown";
import ResetData from "../../components/ResetData";


class ModifyUserSearches extends Component {

  state = {

    searches: "",
    details: "",
    userads: "",

    showResults: false,

  };

  componentDidMount = () => {

  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();



  //   API.updateAd()
  //     .then(res => {
  //       console.log("this is the return for updateAd")
  //       console.log(res.data)

  //       })
  //     .catch(err => console.log(err));

  // };



  clearSearches = () => {

    API.clearUserSearches()
      .then(res => {
        console.log("this is the return for clearUserSearches")
        console.log(res.data)
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

  
  // clearDetails = () => {

  //   API.clearDetails()
  //     .then(res => {
  //       console.log("this is the return for clearDetails")
  //       console.log(res.data)

  //     })
  //     .catch(err => console.log(err));
  // };



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
            {/* <button onClick={this.clearDetails}>Clear Match Details</button> */}
            {this.state.showResults ? (
              <ResetData
                searches={this.state.searches}
                details={this.state.details}
                userads={this.state.userads}
              />
            ) : (
                <div></div>
              )}


            {/* <div>
            <div>Number of user searches removed: {this.state.searches}.</div>
            <div>Number of search to ad details removed: {this.state.details}.</div>
            <div>Number of custom user ads removed: {this.state.userads}.</div>
          </div> */}



          </div>

        </div>



      </div>

    );
  };
}


export default ModifyUserSearches;





