import React, { Component } from "react";
import AdminNav from "../../components/AdminNav";
import API from "../../utils/API";
import NewAdForm from "../../components/NewAdForm";
import "./NewCompany.css";

class NewCompany extends Component {

  state = {
    company: "",
    keywords: "",
    image: "",
    link: "",
    description: "",

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
      image: this.state.image,
      link: this.state.link,
      description: this.state.description,
    })
      .then(res => {

        this.setState({
          company: "",
          keywords: "",
          image: "",
          link: "",
          description: "",
        })
      })
      .catch(err => console.log(err));

    this.redirectArticles();

  };

  redirectArticles = () => {
    this.props.history.push("/admin");
  }

  render() {
    return (
      <div>
        <AdminNav />
        <br />
        <div className="newcompany-title text-center">
         Enter new advertisement information below.
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-6">

            <NewAdForm
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />

          </div>
        </div>

      </div>
    );
  };
}


export default NewCompany;
