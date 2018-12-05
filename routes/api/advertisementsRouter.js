const router = require("express").Router();
const advertisements = require("../../controllers/advertisementsController");



// Matches with "/api/advertisements"

router.route("/")
  .get((req, res) => {
    console.log("a request for all advertisements.")
    advertisements.findAll()
      .then(dbresults => {
        
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    console.log("post request to create")
    console.log(req.body)

    advertisements.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")

  .get((req, res) => {
    console.log("a request for company results.")
    console.log(req.params.company)
    advertisements.findByCompany({ company:req.params.company })
    .then(dbresults => {
      console.log("$$$$$$$")
      console.log(dbresults)
      res.json(dbresults)})
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

  router.route("/keywords")
  .get((req, res) => {
    console.log("987654321 a request for all keywords.")
    advertisements.findAll()
      .then(dbresults => {
        console.log("123456789 does this have keywords");
        console.log(dbresults);
        
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });




module.exports = router;





