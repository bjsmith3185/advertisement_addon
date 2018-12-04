
const db = require("../models");
const advertisementsController = require("../controllers/advertisementsController");
const userAdsController = require("../controllers/userAdsController");
const randomAd = require("../advertisementMaker/randomAd");
const createComparison = require("../advertisementMaker/createComparison");


module.exports = {
    search: function () {
        console.log("in the search() for custom ads")

        return new Promise((resolve, reject) => {


            userAdsController.findAll()
                .then(dbresults => {
                    console.log("this is all the userAds")
                    console.log(dbresults)

                });

            resolve(dbresults);

        })


        // if (!userArray) {
        //     // call the randomAd()
        // } else {
        //     return new Promise((resolve, reject) => {
        //         userAdsController.findAll()
        //             .then(dbresults => {
        //                 console.log("this is all the userAds")
        //                 console.log(dbresults);

        //                 let result = randomAd.randomizeAds(dbresults);
        //                 console.log("this is the random add from the userAds array");
        //                 console.log(result)
        //                 resolve(result);
        //                 // .then(result => {
        //                 //     console.log("this is the random add from the userAds array");
        //                 //     console.log(result)
        //                 //     resolve(result);

        //                 // })


        //             })
        //     })
        // }


    }
};



        // var searchArray = [];

        // for (var i = 0; i < searchTerms.length; i++) {
        //     searchArray.push(searchTerms[i].search)
        // }

        // for (var k = 0; k < searchArray.length; k++) {
        //     for (var t = 0; t < adData.length; t++) {
        //         for (var s = 0; s < adData[t].keywords.length; s++) {
        //             if (searchArray[k] === adData[t].keywords[s]) {
        //                 // console.log(`this is a match: ${searchArray[k]} and ${adData[t].keywords[s]}. `)
        //                 // // put the matches into a seperate database or array.
        //                 // console.log("this ad will be put in the userAds collection")
        //                 // console.log(adData[t])

        //                 db.UserAds
        //                     // .create({ myAds: adData[t]})
        //                     .findOneAndUpdate({ company: adData[t].company },
        //                         adData[t], { upsert: true })


        //                     .then(dbModel => {
        //                         // console.log("the ad was insterted!, below is an object")
        //                         // console.log(dbModel)
        //                         return dbModel
        //                     })
        //             }
        //         }
        //     }
        // }


