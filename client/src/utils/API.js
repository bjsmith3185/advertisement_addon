import axios from "axios";



export default {
  // Gets all searches
  getSearches: function () {  // working
    return axios.get("/api/searches");
  },

  // Saves a search 
  saveSearch: function (data) {  // working
    console.log("this is API.js saveSearch post request")
    console.log(data);
    return axios.post("/api/searches", data);
  },
   

  compareSearchTermToAds: function (data) {  // working
    console.log("checking for match:")
    console.log(data)
    return axios.post("/api/displayads", data)
  },

  
  checkForCustomAds: function () {  // displays ad: random or custom
    return axios.get("/api/displayads/check")
  },


  saveAdvertisement: function (data) {
    console.log("saveAdvertisement.API.js")
    console.log(data)
    return axios.put("/api/advertisements", data);

  },

  createNewAd: function (data) {
    console.log("this is the new ad")
    console.log(data);
    return axios.post("/api/advertisements", data)
  },


  showAllAds: function () {
    return axios.get("/api/advertisements");
  },


  deleteAd: function (company) {
    console.log("this is the deleteAd() API.js")
    console.log(company);
    return axios.delete("/api/advertisements/" + company)

  },

  updateAd: function (data, company) {
    console.log("this is the updateAd")
    console.log(data);
    return axios.put("/api/advertisements/" + company, data);
  },

  findOneAd: function (company) {
    console.log("this is the findOneAd")
    console.log(company);
    return axios.get("/api/advertisements/" + company);
  },

 
  getDetails: function () {
    console.log("getDetails");
    return axios.get("/api/details");
  },

  clearUserSearches: function () {
    console.log("clear user searches")
    return axios.delete("/api/modify");
  },


  populateAdvertisements: function() {
    return axios.post("/api/populate");
  },

  // clearDetails: function () {
  //   console.log("clear details")
  //   return axios.delete("/api/modify/details");
  // },


};

