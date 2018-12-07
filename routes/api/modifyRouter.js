const router = require("express").Router();
const searches = require("../../controllers/searchesController");
const details = require("../../controllers/searchMatchesController");
const userAds = require("../../controllers/userAdsController");


// Matches with "/api/modify/searches"

router.route("/")
  .delete((req, res) => {
    console.log("detete searches request")

    searches.remove()
      .then(search => {
        // console.log("result after deleteing searches")
        // console.log(search)
        console.log(`deleted ${search.n} entries from user searches`)
        //------------------------------------------------
        details.remove()
          .then(details => {
            // console.log("result after deleteing details")
            // console.log(details)
            console.log(`deleted ${details.n} entries from match details`)
            //---------------------------------------------
            userAds.remove()
              .then(userads => {
                // console.log("result after deleteing userAds")
                // console.log(userads)
                console.log(`deleted ${userads.n} entries from custom ads`)

                let data = {
                  searches: search.n,
                  details: details.n,
                  customads: userads.n,
                }
                res.json(data)
              })
              .catch(err => res.status(422).json(err))
          })
          .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err))

  });






module.exports = router;



// router.route("/")
//   .delete((req, res) => {
//     console.log("detete searches request")

//     searches.remove()
//       .then(dbresults => {
//         console.log("result after deleteing searches")
//         res.json(dbresults)
//         //------------------------------------------------
//       })
//       .catch(err => res.status(422).json(err))

//     details.remove()
//     .then(dbresults => {
//       console.log("result after deleteing details")
//       // res.json(dbresults)
//     })
//     .catch(err => res.status(422).json(err))

//     userAds.remove()
//     .then(dbresults => {
//       console.log("result after deleteing userAds")
//       // res.json(dbresults)
//     })
//     .catch(err => res.status(422).json(err))

//   });

