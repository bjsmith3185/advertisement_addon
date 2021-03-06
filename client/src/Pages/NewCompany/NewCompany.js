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
        this.redirectArticles();
      })
      .catch(err => console.log(err));
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
          <div className="col-8">

            <NewAdForm
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              company={this.state.company}
              image={this.state.image}
              description={this.state.description}
              link={this.state.link}
            />

          </div>
        </div>

      </div>
    );
  };
}


export default NewCompany;
