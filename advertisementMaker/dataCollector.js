
const advertisementsController = require("../controllers/advertisementsController");


// this function will track the number of times an ad is displayed.

module.exports = {

    addToCount: function (array, type) {
        // console.log("this is the array inside addToCount()")
        if (type === "custom") {
            // custom ad
            // console.log("custom ad");
            // console.log(array.company)


            advertisementsController.findByCompany(array.company)
            .then(dbresults => {
                // console.log("############ this is the return from finding company add to increase count")
                // console.log(dbresults[0].timesShownCustom);

                let newNumber = parseInt(dbresults[0].timesShownCustom) + 1;
                advertisementsController.update(array.company, { timesShownCustom: newNumber })
                    .then(dbresults => {
                        // console.log("this is the return from db update")
                        // console.log(dbresults);
                    })
                    .catch(err => res.status(422).json(err))

            })
            .catch(err => console.log(status(422).json(err)))

            // incrase the count by 1
           

        } else {
            // random ad
            // console.log("random ad")
            // console.log(array.company)
            // console.log(array.timesShownRandom)
            // increase the count by 1
            let newNumber = parseInt(array.timesShownRandom) + 1;
            // console.log(newNumber)
            advertisementsController.update(array.company, { timesShownRandom: newNumber })
                .then(dbresults => {
                    // console.log("this is the return from db update")
                    // console.log(dbresults);
                })
                .catch(err => console.log(status(422).json(err)))
        }

    },

};
