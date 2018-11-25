import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";


class AllAds extends Component {

  state = {
    allAds: [],
   

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

    
  };

  showState = () => {

  };



  allAds = () => {
   
   API.showAllAds()
   .then(res => {

    this.setState({
      allAds: res.data
    })
  })
  .catch(err => console.log(err));
  }






  render() {
    return (
      <div>
        {/* <AdminNav  allAds={this.allAds} /> */}
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


export default AllAds;
