
const db = require("../models");
const advertisementsController = require("../controllers/advertisementsController");
const userAdsController = require("../controllers/userAdsController");
// const createComparison = require("../advertisementMaker/createComparison");
const searchMatchesController = require("../controllers/searchMatchesController");

module.exports = {
    compare: function (searchWord) {
        // console.log("in the compareSearchToAds.js")
        // console.log(searchWord);
        let word = searchWord.term;
     
    return new Promise((resolve, reject) => {
        advertisementsController.findAll()
            .then(dbresults => {

                for (var i = 0; i < dbresults.length; i++) {
                    for (var k = 0; k < dbresults[i].keywords.length; k++) {
                        if (word === dbresults[i].keywords[k]) {
                            // console.log(`word: ${word} keyword: ${dbresults[i].keywords[k]}`)
                            // console.log("4444444 ");
                            // console.log(dbresults[i])
                            userAdsController.create(dbresults[i])
                                .then(result => {
                                    console.log("inserted into userAds");
                                    console.log(result)

                                    let newData = {
                                        search: word,
                                        company: result.company,
                                        keywords: result.keywords,
                                    }
                            

                                    searchMatchesController.create(newData)

                                    // createComparison.create(result, word)
                                    .then(finished => {
                                        console.log("inserted into searchMatches")
                                        console.log(finished)
                                        resolve(result);




                                    })
                                    // resolve(result);
                                })
                        }
                    }
                }
            })
        })
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


