import React, { Component } from "react";
import AdminNav from "../../components/AdminNav";
import BusinessData from "../../components/BusinessData";
import List from "../../components/List";
import API from "../../utils/API";
import "./Business.css";


class Business extends Component {

  state = {
    allAds: [],
    company: "",
    keywords: "",
    description: "",
    link: "",
    image: "",
    selected: "",
    value: "",
    shownRandom: "",
    shownCustom: "",
    viewData: false,
  };


  componentDidMount = () => {
    this.allAds();
  };

  getData = (company) => {
    console.log(`this is the company: ${company}.`)
    this.setState({
      company: "",
      shownCustom: "",
      shownRandom: "",
      viewData: true,

    })

    API.findOneAd(company)
      .then(res => {

        this.setState({
          company: res.data[0].company,
          link: res.data[0].link,
          image: res.data[0].image,
          description: res.data[0].description,

          shownCustom: res.data[0].timesShownCustom,
          shownRandom: res.data[0].timesShownRandom,
        });
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


  render() {
    return (
      <div>
        <AdminNav />

        <div className="row">
          <div className="col-5">
            <div className="business-company-title">
              Click company to view ad information.
          </div>
            <div className="business-list-area">
              <List
                allAds={this.state.allAds}
                viewAd={this.getData}
              />
            </div>
          </div>

          <div className="col-7">

            {this.state.viewData ? (
              <div>
                <BusinessData
                  random={this.state.shownRandom}
                  custom={this.state.shownCustom}
                  company={this.state.company}
                  image={this.state.image}
                  description={this.state.description}
                  link={this.state.link}
                />
              </div>
            ) : (
                <div></div>
              )}

          </div>

        </div>

      </div>

    );
  };
}


export default Business;

