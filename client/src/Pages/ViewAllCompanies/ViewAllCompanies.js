import React, { Component } from "react";
import AdminNav from "../../components/AdminNav";
import API from "../../utils/API";
import List from "../../components/List";
import Advertisement from "../../components/Advertisement";
import "./ViewAllCompanies.css";

class ViewAllCompanies extends Component {

  state = {
    allAds: [],
    advertisement: {
      company: "",
      keywords: "",
      image: "",
      link: "",
      description: "",
    },

    showAdvertisement: false,

  };

  componentDidMount = () => {
    this.allAds();
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

  viewAd = (company) => {
    for (var i = 0; i < this.state.allAds.length; i++) {
      if (company === this.state.allAds[i].company) {
        this.setState({
          advertisement:
          {
            company: this.state.allAds[i].company,
            keywords: this.state.allAds[i].keywords,
            image: this.state.allAds[i].image,
            link: this.state.allAds[i].link,
            description: this.state.allAds[i].description,
          },
          showAdvertisement: true,
        })
      }
    }
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
            <div className="viewall-info text-center">-Click company to view ad-</div>

            <div>
              {this.state.allAds.length ? (
                <List
                  allAds={this.state.allAds}
                  viewAd={this.viewAd}
                />
              ) : (
                 <div></div>
                )}
            </div>

          </div>

          <div className="col-1"></div>

          <div className="col-3">

            {this.state.showAdvertisement ? (
              <div className="text-center viewall-ad">

                <Advertisement
                  company={this.state.advertisement.company}
                  keywords={this.state.advertisement.keywords}
                  image={this.state.advertisement.image}
                  link={this.state.advertisement.link}
                  description={this.state.advertisement.description}
                />

              </div>
            ) : (
                <div className="text-center viewall-ad"></div>
              )}
          </div>

        </div>
      </div>

    );
  }
}

export default ViewAllCompanies;
