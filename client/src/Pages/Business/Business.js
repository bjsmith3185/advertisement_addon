import React, { Component } from "react";
import AdminForm from "../../components/AdminForm";
import AdminNav from "../../components/AdminNav";
import Advertisement from "../../components/Advertisement";
import AllAdsList from "../../components/AllAdsList";
import API from "../../utils/API";
import "./Business.css";

// import DropdownList from '../../components/Dropdown/flatArrayExample.js';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import MyDropdown from "../../components/MyDropdown/MyDropdown";


class Business extends Component {

  state = {
    allAds: [],

    companies: [],

    company: "",
    keywords: "",

    previousCompany: "",
    previousKeywords: "",

    update: false,


    selected: "",

    value: "",

  };



  componentDidMount = () => {
    this.allAds();
    // this.showState();
    // this.getCompanies();
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

    let newCompany = "";
    let newKeywords = [];

    if (this.state.company === "") {
      newCompany = this.state.previousCompany;
    } else {
      newCompany = this.state.company;
    }

    if (this.state.keywords === "") {
      newKeywords = this.state.previousKeywords;
    } else {
      newKeywords = array;
    }

    let data = {
      company: newCompany,
      keywords: newKeywords,
    }

    // this updates: however, it replaces all prev keywords with the newly entered keywords. may be able to use $push to add it.

    console.log(data)
    API.updateAd(data, this.state.previousCompany)
      .then(res => {
        console.log("this is the return for updateAd")
        console.log(res.data)
        this.setState({
          allAds: "",

          update: false,
          company: "",
          keywords: "",
          previousCompany: "",
          previousKeywords: "",

        });
        this.allAds();

      })
      .catch(err => console.log(err));

  };

  getData = (company) => {
    console.log(`this is the company: ${company}.`)
  };

  showState = () => {
    console.log("this is the current state of value")
    console.log(this.state.value)

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

  thisCompany = (company) => {
    console.log("this is the company: " + company);

  };


  // removeAd = (company) => {
  //   console.log("this is the company to remove: " + company)
  //   // let data = { company: company};
  //   // console.log(data)
  //   API.deleteAd(company)
  //     .then(res => {
  //       console.log("this is the return for removeAd")
  //       console.log(res.data)
  //       // this.setState({
  //       //   allAds: res.data
  //       // })
  //     })
  //     .catch(err => console.log(err));

  // };

  // modifyAd = (company) => {
  //   console.log("this is the company to modify: " + company)
  //   console.log(company)

  //   for (var i = 0; i < this.state.allAds.length; i++) {
  //     if (company === this.state.allAds[i].company) {
  //       this.setState({
  //         previousCompany: this.state.allAds[i].company,
  //         previousKeywords: this.state.allAds[i].keywords,
  //       })
  //     }
  //   }

  //   if(this.state.update === false) {
  //     this.setState({
  //       update: true
  //     })
  //   } else {
  //     this.setState({
  //       update: false,
  //       company: "",
  //       keywords: "",
  //       previousCompany: "",
  //       previousKeywords: "",

  //     })
  //   }
  // };

  // updateAd = (company) => {
  //   console.log("this is the company to update: " + company)
  //   let data = { company: company};
  //   console.log(data)
  //   API.updateAd(data)
  //   .then(res => {
  //     console.log("this is the return for updateAd")
  //     console.log(res.data)
  //     // this.setState({
  //     //   allAds: res.data
  //     // })
  //   })
  //   .catch(err => console.log(err));

  // };
  handleCheck = (e) => {
    alert(e.target);
  }


  render() {
    return (
      <div>
        <AdminNav />

        <div className="row">
          <div className="col-4">
            <ul>
              {this.state.allAds.map(company => (
                <li key={company.company}
                >
                  <div>{company.company}</div>
                  <button onClick={() => this.getData(company.company)}>Get Data</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-8">
          </div>

        </div>



      </div>

    );
  };
}


export default Business;







// handleChange = (event) => {
//   console.log("this is in handleChange")
//   console.log(event.target.value);


//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//     // this.findouttheState()

//   };

//   // findouttheState = () => {
//   //   if(this.state.value === "Kmart") {
//   //     console.log("the value of value: " + this.state.value)
//   //   } else {
//   //     console.log("the value of value is false")
//   //   }
//   // }

//   // let value = event.target.value;
//   // this.setState({
//   //   value: value
//   // })


// handleSubmit(event) {
//   event.preventDefault();
//   // alert("your choice is: " + this.state.value);
//   console.log("!")
//   console.log(event)
// };

// // getCompanies = () => {
// //   // const names = [];

// //   let names = Object.keys(this.state.allAds);    
// //   this.setState({
// //     companies: names
// //   })

// // };

// // onSelect = (option) => {
// //   console.log('You selected ', option)
// //   this.setState({selected: option})
// // }