import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";


class Admin extends Component {

  state = {
    company: "",
    keywords:"",

    allAds: [],
    showAllAds: false,
    showEnterNewAd: false,
    
  };

  componentDidMount = () => {

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

  showState = () => {
    
  };

  newAd = () => {
    if(this.state.showEnterNewAd) {
      this.setState({
        showEnterNewAd: false
      })
    } else {
      this.setState({
        showEnterNewAd: true
      })
    }
   
  };

  allAds = () => {
    this.setState({
      showAllAds: true
    })

  }

  

  render() {
    return (
      <div>
        <AdminNav newAd={this.newAd} allAds={this.allAds}/>
        <br />
        <div>
        <button onClick={this.newAd}>Enter New Ad</button>
        </div>
        <div className="row">
            <div className="col-6">
            {this.state.showEnterNewAd ? (
              <AdminForm 
                  company={this.state.company}
                  keywords={this.state.keywords}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
            ) : (
              <div></div>
            )}
                
          </div>

          {/* <div className="col-6">
            <div>  View Advertisement info</div>
            <div>{this.state.company}</div>
            <div>{this.state.keywords}</div>
          </div> */}
        </div>

      

      </div>

    );
  };
}


export default Admin;
