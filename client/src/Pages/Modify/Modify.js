import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import AllAdsList from "../../components/AllAdsList";
import API from "../../utils/API";


class Modify extends Component {

  state = {
    allAds: [],

    company: "",
    keywords: "",

    previousCompany: "",
    previousKeywords: "",

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

  handleFormSubmit = event => {
    event.preventDefault();

    let array = [];
    array = this.state.keywords.split(/[ ,]+/);
    console.log("this is the keywords array");
    console.log(array)

    let newCompany = "";
    let newKeywords = [];

    if (this.state.company === "") {
      newCompany = this.state.previousCompany;
    } else {
      newCompany = this.state.company;
    }

    if (this.state.keywords === "") {
      newKeywords = this.state.previousKeywords;
    } else {
      newKeywords = array;
    }

    let data = {
      company: newCompany,
      keywords: newKeywords,
    }

    // this updates: however, it replaces all prev keywords with the newly entered keywords. may be able to use $push to add it.

    console.log(data)
    API.updateAd(data, this.state.previousCompany)
      .then(res => {
        console.log("this is the return for updateAd")
        console.log(res.data)
        this.setState({
          allAds: "",

          update: false,
          company: "",
          keywords: "",
          previousCompany: "",
          previousKeywords: "",

        });
        this.allAds();

      })
      .catch(err => console.log(err));

  };

  showState = () => {

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


  removeAd = (company) => {
    console.log("this is the company to remove: " + company)
    
      API.deleteAd(company)
      .then(res => {
        console.log("this is the return for removeAd")
        console.log(res.data)
        // this.setState({
        //   allAds: res.data
        // })
      })
      .catch(err => console.log(err));
  };

  modifyAd = (company) => {
    console.log("this is the company to modify: " + company)
    console.log(company)

    for (var i = 0; i < this.state.allAds.length; i++) {
      if (company === this.state.allAds[i].company) {
        this.setState({
          previousCompany: this.state.allAds[i].company,
          previousKeywords: this.state.allAds[i].keywords,

          company: this.state.allAds[i].company,
          keywords: this.state.allAds[i].keywords,
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

        {/* <div>Update or Delete Ad</div> */}

        <div className="row">
          <div className="col-12">

            {this.state.update ? (
              <div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-6">
                    <AdminForm
                      previousCompany={this.state.previousCompany}
                      previousKeywords={this.state.previousKeywords}
                      company={this.state.company}
                      keywords={this.state.keywords}
                      handleInputChange={this.handleInputChange}
                      handleFormSubmit={this.handleFormSubmit}
                    />
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
