import React, { Component } from "react";
import Form from "../../components/Form";
import Nav from "../../components/Nav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";


class Search extends Component {

  state = {
    searchTerm: "",
    showResult: false,
    previousSearches: [],
    advertisement: {
      company: "",
    },
    adArray: [],
  };

  componentDidMount = () => {
    this.initialShowAdvertisement();
  };

  loadSearches = () => {
    API.getSearches()
      .then(res => {
        this.setState({ previousSearches: res.data })
      })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      showResult: true
    })

    API.saveSearch({
      search: this.state.searchTerm
    })
      .then(res => {

        this.loadSearches();
        this.checkIfSearchMatchesAd();
        this.setState({ searchTerm: "" });
        this.personalizedAds();
      })
      .catch(err => console.log(err));

  };

  showState = () => {
    // console.log(this.state.searchTerm);
    // console.log(this.state.showResult);
    // console.log(this.state.advertisement);
    // console.log("this is the adArray")
    // console.log(this.state.adArray);
  };

  initialShowAdvertisement = () => {
    API.getAdvertisement()
      .then(res => {
        this.setState({
          advertisement:
            { company: res.data.company }
        })
      })
      .catch(err => console.log(err));
  };


  personalizedAds = () => {
    API.getPersonalizedAds()
      .then(res => {
        if (res.data.company) {
          this.setState({
            advertisement:
              { company: res.data.company }
          })
        } else {
          console.log("there is no custom userads array")
        }

      })
      .catch(err => console.log(err));
  };

  // timer to reload the advertisements
  timer = setInterval(() => {
    console.log("loading a new ad")

    this.personalizedAds();
  }, 10000);


  checkIfSearchMatchesAd = () => {
    API.createUserAdArray()
      .then(res => {})
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Nav />
        <br />

        <div className="row">
          <div className="col-12">
            <Form
              searchTerm={this.state.searchTerm}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="row">

          <div className="col-9">

            {this.state.previousSearches.length ? (

              <ul>
                {this.state.previousSearches.map(search => (
                  <li key={search.search}>
                    {search.search}
                  </li>
                ))}
              </ul>

            ) : (
                <h3>No searches to Display</h3>
              )}

          </div>

          <div className="col-3">
            {this.state.advertisement ? (
              <div>


                <Advertisement company={this.state.advertisement.company} />



              </div>
            ) : (
                <h3>No ads to Display</h3>
              )}

          </div>

        </div>

      </div>
    );
  };
}


export default Search;
