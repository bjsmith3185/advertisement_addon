import React, { Component } from "react";
import Form from "../../components/Form";
import Nav from "../../components/Nav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";
import SearchToolBar from "../../components/SearchToolBar";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
import ComparisonBlock from "../../components/ComparisonBlock/ComparisonBlock";


class Search extends Component {

  state = {
    searchTerm: "",
    showResult: false,
    previousSearches: [],
    advertisement: {
      company: "",
      keywords: "",
      image: "",
      link: "",
      description: "",
    },
    adArray: [],

    detailsArray: [],
  };

  componentDidMount = () => {
    this.findAd();
    this.loadSearches();
    this.matchedDetails();
    // this.initialShowAdvertisement();
  };

  // this function will display an ad: random or custom
  findAd = () => {
    API.checkForCustomAds()
      .then(res => {
        console.log("!!!!!! this tells if there are custom ads or not");
        console.log(res);
        this.setState({
          advertisement:
          {
            company: res.data.company,
            keywords: res.data.keywords,
            image: res.data.image,
            link: res.data.link,
            description: res.data.description,
          }
        })

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
        // console.log("********* is this an array?")
        // console.log(res.data.search)
        this.loadSearches();  // this updates the prev search list
        this.checkIfSearchMatchesAd(res.data.search);
        this.setState({ searchTerm: "" });
        // this.personalizedAds();
      })
      .catch(err => console.log(err));

  };


  loadSearches = () => {
    API.getSearches()
      .then(res => {
        this.setState({ previousSearches: res.data })
      })
      .catch(err => console.log(err));
  };


  checkIfSearchMatchesAd = (term) => {
    let data = {
      term: term
    }
    API.compareSearchTermToAds(data)
      .then(res => { })
      .catch(err => console.log(err));
  };

  // timer to reload the advertisements
  //  timer = setInterval(() => {
  //   console.log("loading a new ad")

  //   this.findAd();
  // }, 5000);

  matchedDetails = () => {

    API.getDetails()
      .then(res => {
        console.log("this is the return from matchedDetails")
        console.log(res.data)
        this.setState({
          detailsArray: res.data
        })
      })
      .catch(err => console.log(err));
  };


  seeInfo = () => {
    console.log("this is the prev searches []")
    console.log(this.state.previousSearches)
  }

  // clearHistory = () => {
  //   console.log("clearing Search History");
  //   API.deleteSearches()
  //     .then(result => {
  //       console.log("all searches deleted")

  //     })
  //     .catch(err => console.log(err));
  // };


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

            {/* <SearchToolBar
              clearHistory={this.clearHistory}
            /> */}

            <div className="row">
              <div className="col-5">
                {this.state.previousSearches.length ? (
                  <div>
                    {this.state.previousSearches.map(search => (
                      <SearchResultsList
                        key={search.search}
                        previousSearches={this.state.previousSearches}
                      />
                    ))}
                  </div>
                ) : (
                    <h3>No searches to Display</h3>
                  )}
              </div>


              {/* <div className={"col-1"}></div> */}

              <div className={"col-7"}>

                {this.state.detailsArray.length ? (
                  <ComparisonBlock
                    detailsArray={this.state.detailsArray}
                  />
                ) : (
                    <div>No Detail info available</div>
                  )}

              </div>

            </div>
          </div>


          <div className="col-3">
            {this.state.advertisement ? (
              <div className="text-center">

                <Advertisement
                  company={this.state.advertisement.company}
                  keywords={this.state.advertisement.keywords}
                  image={this.state.advertisement.image}
                  link={this.state.advertisement.link}
                  description={this.state.advertisement.description}
                />

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
