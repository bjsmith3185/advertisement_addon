import axios from "axios";



export default {
  // Gets all searches
  getSearches: function() {
    return axios.get("/api/searches");
  },
  
  // Saves a search 
  saveSearch: function(data) {
    console.log("this is API.js saveSearch post request")
    console.log(data);
    return axios.post("/api/searches", data);
  },

  getAdvertisement: function() {  // line 92
    console.log("this is getAdvertisement.API.js");
    return axios.get("/api/advertisements")
  },

  createUserAdArray: function(data) {  //line 119
    return axios.post("/api/advertisements", data)
  },

  getPersonalizedAds: function() {  // line 106
    return axios.get("/api/userAds")
  },

  saveAdvertisement: function(data) {
    console.log("saveAdvertisement.API.js")
    console.log(data)
    return axios.put("/api/advertisements", data);

  },

  createNewAd: function(data) {

  },

  updateAd: function(data) {

  },

  deleteAd: function(data) {

  },

  showAllAds: function() {
    return axios.get("/api/admin");
  },






  // savePersonalizedAds: function(data) {
  //   return axios.post("api/userAds", data)
  // },

  // getPersonalizedSearches: function() {
  //   return axios.get("/api/userSearches")
  // },

  // savePersonalizedSearches: function(data) {
  //   console.log("this is the search to put into userSearches")
  //   console.log(data)
  //   return axios.post("api/userSearches", data)
  // },

 

};

