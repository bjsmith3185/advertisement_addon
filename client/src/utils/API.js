import axios from "axios";



export default {
  // Gets all searches
  getSearches: function() {  // working
    return axios.get("/api/searches");
  },
  
  // Saves a search 
  saveSearch: function(data) {  // working
    console.log("this is API.js saveSearch post request")
    console.log(data);
    return axios.post("/api/searches", data);
  },


  getAdvertisement: function() {  // working
    console.log("this is getAdvertisement.API.js");
    return axios.get("/api/displayads")
  },


  compareSearchTermToAds: function(data) {  // working
      console.log("checking for match:")
      console.log(data)
    return axios.post("/api/displayads", data)
  },

  // getPersonalizedAds: function() {  // in process
  //   return axios.get("/api/displayads/new")
  // },


  checkForCustomAds: function() {  // displays ad: random or custom
    return axios.get("/api/displayads/check")
  },







  saveAdvertisement: function(data) {
    console.log("saveAdvertisement.API.js")
    console.log(data)
    return axios.put("/api/advertisements", data);

  },

// below is ("/api/admin")
//###########################################33
  createNewAd: function(data) {
    console.log("this is the new ad")
    console.log(data);
    return axios.post("/api/advertisements", data)
  },
  //##############################################

  showAllAds: function() {
    return axios.get("/api/advertisements");
  },
//#############################################

deleteAd: function(company) {
  console.log("this is the deleteAd() API.js")
  console.log(company);
  return axios.delete("/api/advertisements/" + company)

},

updateAd: function(data, company) {
  console.log("this is the updateAd")
  console.log(data);
  return axios.put("/api/advertisements/" + company, data);
},

  findOneAd: function(company) {
    console.log("this is the findOneAd")
    console.log(company);
    return axios.get("/api/advertisements/" + company);
  },

  

  

  

//---------------------------




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

