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


class ModifyUserSearches extends Component {

  state = {
   
    searches: "",
    details: "",
    userads: "",

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
        })
        
      })
      .catch(err => console.log(err));
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

        <div className="row">
          <div className="col-4">
            <button onClick={this.clearSearches}>Clear Searches</button>
          </div>
          <div className="col-2"></div>

          <div className="col-4">
          {/* <button onClick={this.clearDetails}>Clear Match Details</button> */}

          <div>
            <div>Number of user searches removed: {this.state.searches}.</div>
            <div>Number of search to ad details removed: {this.state.details}.</div>
            <div>Number of custom user ads removed: {this.state.userads}.</div>
          </div>



          </div>

        </div>



      </div>

    );
  };
}


export default ModifyUserSearches;





