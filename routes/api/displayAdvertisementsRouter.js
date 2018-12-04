const router = require("express").Router();
const advertisements = require("../../controllers/advertisementsController");
const randomAd = require("../../advertisementMaker/randomAd");
const compareSearch = require("../../advertisementMaker/compareSearchToAds");
const checkForCustomAds = require("../../advertisementMaker/checkForCustomAds");
const userAds = require("../../controllers/userAdsController");


// Matches with "/api/advertisements"

// router.route("/")
//   .get((req, res) => {
//     // console.log("a request for initial random advertisement.")
//     advertisements.findAll()
//       .then(dbresults => {
//         let value = randomAd.randomizeAds(dbresults)
//         // console.log(`this is a random ad to display: ${value}`)
//         res.json(value)
//       })
//       .catch(err => res.status(422).json(err))
//   });


router.route("/")
  .post((req, res) => {

    compareSearch.compare(req.body)
      .then(dbresults => {
        console.log("$#$#$#this is the result from comparing search to ads")
        console.log(dbresults);
        res.json(dbresults);
      })
      .catch(err => res.status(422).json(err))
  });

// router.route("/new")
//   .get((req, res) => {
//     console.log("checking to see if a userAds array exists.")
//     checkForCustomAds.search()
//       .then(status => {
//         console.log(status)
//       })
//       // .then(dbresults => {
//       //   console.log("????????????? this is the custom random ad")
//       //   console.log(dbresults)
//       //   res.json(value)
//       // })
//       .catch(err => res.status(422).json(err))
//   });

router.route("/check")
  .get((req, res) => {
    console.log("checking to see if a userAds array exists.")
    userAds.findAll()
      .then(dbresults => {
        console.log("this tells if there is a userAd []")
        console.log(dbresults);
        if (dbresults.length) {
          console.log(" this is true")
          console.log("getting ad from custom ads")
          let value = randomAd.randomizeAds(dbresults)
          console.log(`this is a custom ad to display:`)
          console.log(value);
          res.json(value)


        } else {
          console.log("this is false")
          console.log("get random ad from database")
          advertisements.findAll()
            .then(data => {
              let value = randomAd.randomizeAds(data)
              console.log(`this is a random ad to display: ${value}`)
              res.json(value)
            })
            .catch(err => res.status(422).json(err))
        }



        // res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))

  });















// router.route("/")
//   .post((req, res) => {
//     console.log("post request to create")
//     console.log(req.body)

//     advertisements.create(req.body)
//       .then(dbresults => res.json(dbresults))
//       .catch(err => res.status(422).json(err))
//   });

router.route("/:company")

  .get((req, res) => {
    console.log("a request for company results.")
    console.log(req.params.company)
    advertisements.findByCompany({ company: req.params.company })
      .then(dbresults => {
        console.log("$$$$$$$")
        console.log(dbresults)
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  });

router.route("/:company")
  .put((req, res) => {
    console.log("this is updating advertisements info")
    console.log(req.params.company)
    console.log(req.body)
    advertisements.update(req.params.company, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

router.route("/:company")
  .delete((req, res) => {
    console.log("this is req to delete company");
    console.log(req.params.company)
    advertisements.remove(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



module.exports = router;





