import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import AllAdsList from "../../components/AllAdsList";
import API from "../../utils/API";
import Advertisement from "../../components/Advertisement";
import "./Modify.css";

class Modify extends Component {

  state = {
    allAds: [],

    company: "",
    keywords: "",
    image: "",
    link: "",
    description: "",


    previousCompany: "",
    previousKeywords: "",
    previousImage: "",
    previousLink: "",
    previousDescription: "",


    displayKeywords: "",
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

  submit = event => {
    event.preventDefault();
    console.log("submitting changes")

    let newCompany = "";
    let newKeywords = [];
    let newImage = "";
    let newLink = "";
    let newDescription = "";


    if (this.state.previousKeywords === this.state.keywords) {
      // this one has no change to keywords
      // console.log("keywords have not changed")
      // console.log(this.state.previousKeywords)
      // console.log(this.state.keywords)
      newKeywords = this.state.previousKeywords
    } else {
      // this one contains an array with modified keywords
      // console.log("modified keywords")
      // console.log(this.state.previousKeywords)
      // console.log(this.state.keywords) // string

      newKeywords = this.state.keywords.split(/[ ,]+/);
      // console.log("this should be an array now");
      // console.log(array)

    }

    if (this.state.previousCompany === this.state.company) {
      // no change in company
      newCompany = this.state.previousCompany
    } else {
      // changed company name
      newCompany = this.state.company
    }


    if (this.state.previousImage === this.state.image) {
      // no change in image
      newImage = this.state.previousImage
    } else {
      // new image
      newImage = this.state.image
    }

    if (this.state.previousLink === this.state.link) {
      // no change
      newLink = this.state.previousLink
    } else {
      // updated link
      newLink = this.state.link
    }

    if (this.state.previousDescription === this.state.description) {
      newDescription = this.state.previousDescription
    } else {
      newDescription = this.state.description
    }


    let data = {
      company: newCompany,
      keywords: newKeywords,
      image: newImage,
      link: newLink,
      description: newDescription,


    }

    console.log("this is the data send to the database")
    console.log(data);

    // // this updates: however, it replaces all prev keywords with the newly entered keywords. may be able to use $push to add it.

    // console.log(data)
    API.updateAd(data, this.state.previousCompany)
      .then(res => {
        console.log("this is the return for updateAd")
        console.log(res.data)
        this.setState({
          allAds: "",

          update: false,
          company: "",
          keywords: "",
          image: "",
          link: "",
          description: "",
          previousCompany: "",
          previousKeywords: "",
          previousImage: "",
          previousLink: "",
          previousDescription: "",
          displayKeywords: "",

        });
        this.allAds();
        this.props.history.push({ pathname: "/admin" });
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
          previousImage: this.state.allAds[i].image,
          previousLink: this.state.allAds[i].link,
          previousDescription: this.state.allAds[i].description,

          company: this.state.allAds[i].company,
          keywords: this.state.allAds[i].keywords,
          image: this.state.allAds[i].image,
          link: this.state.allAds[i].link,
          description: this.state.allAds[i].description,

          displayKeywords: this.state.allAds[i].keywords.join(', '),
          // keywords: this.state.allAds[i].keywords,
          // dont include anthing for image now 


        })

        // create var to display keywords with a ,

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

        <div className="row">
          <div className="col-12">

            {this.state.update ? (
              <div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-5">
                    <AdminForm
                      previousCompany={this.state.previousCompany}
                      previousKeywords={this.state.previousKeywords}
                      previousImage={this.state.previousImage}
                      previousLink={this.state.previousLink}
                      previousDescription={this.state.previousDescription}

                      company={this.state.company}
                      keywords={this.state.keywords}
                      image={this.state.image}
                      link={this.state.link}
                      description={this.state.description}


                      displayKeywords={this.state.displayKeywords}

                      handleInputChange={this.handleInputChange}
                      handleFormSubmit={this.submit}
                    />
                  </div>

                  <div className="col-1"></div>
                  <div className="col-3 text-center">
                    <div className="modify-ad-area">

                      <Advertisement
                        company={this.state.company}
                        image={this.state.image}
                        description={this.state.description}
                        link={this.state.link}
                      />
                    </div>
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
