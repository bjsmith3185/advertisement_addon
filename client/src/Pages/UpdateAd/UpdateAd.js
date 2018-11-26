import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import AllAdsList from "../../components/AllAdsList";
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

  handleFormSubmit = event => {
    event.preventDefault();

    let array = [];
    array = this.state.keywords.split(/[ ,]+/);
    console.log("this is the keywords array");
    console.log(array)

    
  };

  showState = () => {

  };

  Ad = (company) => {
   
   API.findOneAd(company)
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
  let data = { company: company};
  console.log(data)
  API.deleteAd(data)
  .then(res => {
    console.log("this is the return for removeAd")
    console.log(res.data)
    // this.setState({
    //   allAds: res.data
    // })
  })
  .catch(err => console.log(err));
  
};

updateAd = (company) => {
  console.log("this is the company to update: " + company)
  let data = { company: company};
  console.log(data)
  API.updateAd(data)
  .then(res => {
    console.log("this is the return for updateAd")
    console.log(res.data)
    // this.setState({
    //   allAds: res.data
    // })
  })
  .catch(err => console.log(err));
  
};



  render() {
    return (
      <div>
        {/* <AdminNav  allAds={this.allAds} /> */}
        <br />

        <div>All Ads on file</div>

        <div className="row">
          <div className="col-12">

            {this.state.allAds.length ? (

              // <AllAdsList 
              //     allAds={this.state.allAds}
              //     removeAd={this.removeAd}
              //     updateAd={this.updateAd}  
              // />

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
