
// const db = require("../models");

// // this function should see if a search matches any keywords from the ad's array
// // if there is a match it will put the companies add into the userAds collection.
// module.exports = {
//     determineAd: function (adData, searchTerms) {
//         var searchArray = [];

//         for (var i = 0; i < searchTerms.length; i++) {
//             searchArray.push(searchTerms[i].search)
//         }

//         for (var k = 0; k < searchArray.length; k++) {
//             for (var t = 0; t < adData.length; t++) {
//                 for (var s = 0; s < adData[t].keywords.length; s++) {
//                     if (searchArray[k] === adData[t].keywords[s]) {
//                         // console.log(`this is a match: ${searchArray[k]} and ${adData[t].keywords[s]}. `)
//                         // // put the matches into a seperate database or array.
//                         // console.log("this ad will be put in the userAds collection")
//                         // console.log(adData[t])

//                         db.UserAds
//                             // .create({ myAds: adData[t]})
//                             .findOneAndUpdate({ company: adData[t].company },
//                                 adData[t], { upsert: true })


//                             .then(dbModel => {
//                                 // console.log("the ad was insterted!, below is an object")
//                                 // console.log(dbModel)
//                                 return dbModel
//                             })
//                     }
//                 }
//             }
//         }


//     }
// };