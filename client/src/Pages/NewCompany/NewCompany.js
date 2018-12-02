import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";
import NewAdForm from "../../components/NewAdForm/NewAdForm";


class NewCompany extends Component {

  state = {
    company: "",
    keywords: "",

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let array = [];
    array = this.state.keywords.split(/[ ,]+/);
    console.log("this is the keywords array");
    console.log(array)

    // API.saveAdvertisement({
    API.createNewAd({
      company: this.state.company,
      keywords: array,
    })
      .then(res => {

        this.setState({
          company: "",
          keywords: "",
        })
      })
      .catch(err => console.log(err));

  };



  render() {
    return (
      <div>
        <AdminNav />
        <br />
        <div className="jumbotron text-center">
          <h3>Enter new advertisement information below.</h3>
        </div>

        <div className="row">
          <div className="col-6">

            <NewAdForm
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />

            {/* <AdminForm
              company={this.state.company}
              keywords={this.state.keywords}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            /> */}

          </div>
        </div>

      </div>
    );
  };
}


export default NewCompany;
