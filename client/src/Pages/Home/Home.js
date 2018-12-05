import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Home.css";


class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <br />
        <div className="jumbotron admin-header">
          <h1>Advertisement Ad-on.</h1>
        </div>

        <div className="row">
      
          <div className="col-2"></div>
          <div className="col-6">
            <p>This app displays an advertisement based on user search words.</p>
            <p>When the user enters a search word it is saved in a collection. The serarch term is compared to keywords associated with each advertisement on file. When a search word matches a keyword, the advertisement containing that keyword is stored in a user-advertisement collection. At a set interval a random ad is displayed from the user-advertisement collection.</p>
            <p>If no keyword is entered or a search word does not match any advertisement keywords, a random advertisent from those on file is displayed.</p>
            <p>The app will track the number of times each companies advertisement is rendered to the page. The search words that match an advertisement's keywords will also be tracked. This data is available for each company with an advertisement on file.</p>
            
            </div>
        </div>

      </div>
    );
  };
}


export default Home;
