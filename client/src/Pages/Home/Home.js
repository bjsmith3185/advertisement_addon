import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Home.css";


class Home extends Component {

  render() {
    return (

      <div>
        <Nav />
        <br />
        <div className="admin-header">
          <h1 className="home-h1">AD-On.</h1>
        </div>

        <div className="row">

          <div className="col-2"></div>
          <div className="col-6">

            <h3 className="home-h3">This app displays an advertisement based on user search words.</h3>

            <p className="home-p home-top">When the user enters a search word it is saved in a collection. The serarch term is compared to keywords associated with each advertisement on file. When a search word matches a keyword, the advertisement containing that keyword is stored in a user-advertisement collection. At a set interval a random ad is displayed from the user-advertisement collection.</p>

            <p className="home-p">If no keyword is entered or a search word does not match any advertisement keywords, a random advertisent from those on file is displayed.</p>
            
            <p className="home-p">The app will track the number of times each companies advertisement is rendered to the page. The search words that match an advertisement's keywords will also be tracked. This data is available for each company with an advertisement on file.</p>

          </div>
        </div>

      </div>

    );
  };
}


export default Home;
