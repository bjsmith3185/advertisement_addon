import React, { Component } from "react";
import Form from "../../components/Form";
import Nav from "../../components/Nav";
import Advertisement from "../../components/Advertisement";
import API from "../../utils/API";
import SearchResultsList from "../../components/SearchResultsList";
import ComparisonBlock from "../../components/ComparisonBlock";
import AllKeywordsList from "../../components/AllKeywordsList";
import "./search.css";


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

    keywordInfo: false,
    userSearchInfo: true,

    allKeywords: [],
  };

  componentDidMount = () => {
    this.findAd();
    this.loadSearches();
    this.matchedDetails();
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
      search: this.state.searchTerm.toLowerCase()
    })
      .then(res => {
        this.loadSearches();  // this updates the prev search list
        this.checkIfSearchMatchesAd(res.data.search);
        this.setState({ searchTerm: "" });
        this.matchedDetails();

      })
      .catch(err => console.log(err));

  };


  loadSearches = () => {
    API.getSearches()
      .then(res => {
        this.setState({ previousSearches: res.data });
        this.matchedDetails();
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
  timer = setInterval(() => {
    console.log("loading a new ad")

    this.findAd();
  }, 10000);

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


  seekeywordInfo = () => {
    console.log("this is the prev searches []")
    console.log(this.state.previousSearches)
  }

  viewDetails = () => {
    console.log("Hello World")
    console.log("this is the keyword array")
    console.log(this.state.allKeywords)
    if (this.state.keywordInfo) {
      this.setState({
        keywordInfo: false
      })
    } else {
      this.setState({
        keywordInfo: true
      })
    }
  };

  viewSearchDetails = () => {

    if (this.state.userSearchInfo) {
      this.setState({
        userSearchInfo: false
      })
    } else {
      this.setState({
        userSearchInfo: true
      })
    }
  };


  createKeywordsArray = () => {
    console.log("987654321 creating keywords array");

    API.showAllAds()
      .then(res => {
        console.log("this is the return from array of keywords")
        console.log(res.data)

        console.log(res.data[1].keywords[0])

        let keyArray = [];
        for (var i = 0; i < res.data.length; i++) {
          for (var k = 0; k < res.data[i].keywords.length; k++) {
            keyArray.push(res.data[i].keywords[k])
          }
        }

        this.setState({
          allKeywords: keyArray
        })
      })
      .catch(err => console.log(err));

  };

  

  render() {
    return (
      <div className="background-area">
        <Nav />
        <br />

        <div className="row">
          <div className="col-12">
            <Form
              searchTerm={this.state.searchTerm}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <hr />
          </div>

        </div>

        <div className="row">

          <div className="col-10">
            <div className="keywordInfo-bar" onClick={this.viewDetails}>Click to hide/show keywords details.</div>
            <div>
              {this.state.keywordInfo ? (
                <div>
                  <AllKeywordsList
                    allKeywords={this.state.allKeywords}
                  />
                </div>
              ) : (
                  <div></div>
                )}
            </div>

            <br/>

            <div className="userSearchInfo-bar" onClick={this.viewSearchDetails}>Click to hide/show User Search details.</div>

            {this.state.userSearchInfo ? (

              <div className="row searchinfo-area">
                <div className="col-4">
                  {this.state.previousSearches.length ? (
                    <div className="text-center">
               
                      <SearchResultsList
                        // key={search}
                        previousSearches={this.state.previousSearches}
                      />

                    </div>
                  ) : (
                      <h3>No searches to Display</h3>
                    )}
                </div>

                <div className={"col-6"}>
                    <div className="text-center">
                  {this.state.detailsArray.length ? (
                    <ComparisonBlock
                      detailsArray={this.state.detailsArray}
                    />
                  ) : (
                      <div>No Detail keywordInfo available</div>
                    )}
                    </div>
                </div>
              </div>


            ) : (

                <div></div>
              )}

          </div>

          <div className="col-2">
            {this.state.advertisement ? (
              <div className="text-right">

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
