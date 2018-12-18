import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import AllAdsList from "../../components/AllAdsList";
import API from "../../utils/API";
import Advertisement from "../../components/Advertisement";
import "./Modify.css";

class Modify extends Component {

  state = {
    allAds: [],
    company: "",
    keywords: "",
    image: "",
    link: "",
    description: "",
    previousCompany: "",
    previousKeywords: "",
    previousImage: "",
    previousLink: "",
    previousDescription: "",
    displayKeywords: "",
    update: false,
  };

  componentDidMount = () => {
    this.allAds();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submit = event => {
    event.preventDefault();

    let newCompany = "";
    let newKeywords = [];
    let newImage = "";
    let newLink = "";
    let newDescription = "";

    if (this.state.previousKeywords === this.state.keywords) {
      newKeywords = this.state.previousKeywords
    } else {
      newKeywords = this.state.keywords.split(/[ ,]+/);
    }

    if (this.state.previousCompany === this.state.company) {
      newCompany = this.state.previousCompany
    } else {

      newCompany = this.state.company
    }

    if (this.state.previousImage === this.state.image) {
      newImage = this.state.previousImage
    } else {
      newImage = this.state.image
    }

    if (this.state.previousLink === this.state.link) {
      newLink = this.state.previousLink
    } else {
      newLink = this.state.link
    }

    if (this.state.previousDescription === this.state.description) {
      newDescription = this.state.previousDescription
    } else {
      newDescription = this.state.description
    }

    let data = {
      company: newCompany,
      keywords: newKeywords,
      image: newImage,
      link: newLink,
      description: newDescription,
    }

    API.updateAd(data, this.state.previousCompany)
      .then(res => {
        this.setState({
          allAds: "",
          update: false,
          company: "",
          keywords: "",
          image: "",
          link: "",
          description: "",
          previousCompany: "",
          previousKeywords: "",
          previousImage: "",
          previousLink: "",
          previousDescription: "",
          displayKeywords: "",
        });
        this.allAds();
        this.props.history.push({ pathname: "/admin" });
      })
      .catch(err => console.log(err));
  };

  allAds = () => {

    API.showAllAds()
      .then(res => {
        this.setState({
          allAds: res.data
        })
      })
      .catch(err => console.log(err));
  };


  removeAd = (company) => {

    API.deleteAd(company)
      .then(res => {
        console.log("this is the return for removeAd")
        console.log(res.data)
        this.setState({
          allAds: res.data
        })
        this.props.history.push({ pathname: "/admin" });
      })
      .catch(err => console.log(err));
  };

  modifyAd = (company) => {

    for (var i = 0; i < this.state.allAds.length; i++) {
      if (company === this.state.allAds[i].company) {
        this.setState({
          previousCompany: this.state.allAds[i].company,
          previousKeywords: this.state.allAds[i].keywords,
          previousImage: this.state.allAds[i].image,
          previousLink: this.state.allAds[i].link,
          previousDescription: this.state.allAds[i].description,

          company: this.state.allAds[i].company,
          keywords: this.state.allAds[i].keywords,
          image: this.state.allAds[i].image,
          link: this.state.allAds[i].link,
          description: this.state.allAds[i].description,

          displayKeywords: this.state.allAds[i].keywords.join(', '),
        })
      }
    }

    if (this.state.update === false) {
      this.setState({
        update: true
      })
    } else {
      this.setState({
        update: false,
        company: "",
        keywords: "",
        previousCompany: "",
        previousKeywords: "",
      })
    }

  };


  render() {
    return (
      <div>
        <AdminNav />
        <br />

        <div className="row">
          <div className="col-12">

            {this.state.update ? (
              <div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-5">
                    <AdminForm
                      previousCompany={this.state.previousCompany}
                      previousKeywords={this.state.previousKeywords}
                      previousImage={this.state.previousImage}
                      previousLink={this.state.previousLink}
                      previousDescription={this.state.previousDescription}

                      company={this.state.company}
                      keywords={this.state.keywords}
                      image={this.state.image}
                      link={this.state.link}
                      description={this.state.description}


                      displayKeywords={this.state.displayKeywords}

                      handleInputChange={this.handleInputChange}
                      handleFormSubmit={this.submit}
                    />
                  </div>

                  <div className="col-1"></div>
                  <div className="col-3 text-center">
                    <div className="modify-ad-area">

                      <Advertisement
                        company={this.state.company}
                        image={this.state.image}
                        description={this.state.description}
                        link={this.state.link}
                      />
                    </div>
                  </div>

                </div>
              </div>
            ) : (
                <div>
                  {this.state.allAds.length ? (

                    <AllAdsList
                      allAds={this.state.allAds}
                      removeAd={this.removeAd}
                      modifyAd={this.modifyAd}
                    />

                  ) : (
                      <h3>No Ads to Display</h3>
                    )}

                </div>
              )}
          </div>
        </div>
      </div>
    );
  };
}


export default Modify;
