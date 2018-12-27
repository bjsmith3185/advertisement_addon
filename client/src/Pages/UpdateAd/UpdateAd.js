import React, { Component } from "react";
import AdminNav from "../../components/AdminNav";
import API from "../../utils/API";


class UpdateAd extends Component {

  state = {
    company: "",
    keywords: "",
    previousCompany: "",
    previousKeywords: "",
  };

  componentDidMount = () => {
    this.Ad();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  Ad = (company) => {
    API.findOneAd(company)
      .then(res => {
        this.setState({
          allAds: res.data
        })
      })
      .catch(err => console.log(err));
  };


  removeAd = (company) => {
    let data = { company: company };
    API.deleteAd(data)
      .then(res => {
        this.setState({
          allAds: res.data
        })
      })
      .catch(err => console.log(err));
  };

  updateAd = (company) => {
    let data = { company: company };
    API.updateAd(data)
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
        <br />

        <div>All Ads on file</div>

        <div className="row">
          <div className="col-12">

            {this.state.allAds.length ? (

              <ul>
                {this.state.allAds.map(company => (
                  <li key={company.company}>
                    <div>This is a company advertisement</div>
                    <div> {company.company}</div>
                    <div> {company.keywords}</div>
                  </li>
                ))}
              </ul>

            ) : (
                <h3>No Ads to Display</h3>
              )}

          </div>
        </div>
      </div>

    );
  };
}


export default UpdateAd;
