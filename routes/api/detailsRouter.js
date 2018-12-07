const router = require("express").Router();
const details = require("../../controllers/searchMatchesController");



// Matches with "/api/advertisements"

router.route("/")
  .get((req, res) => {
    // console.log("a request for all matchDetails.")
    details.findAll()
      .then(dbresults => {
        
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    // console.log("post request to create")
    // console.log(req.body)

    details.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")

  .get((req, res) => {
    // console.log("a request for company results.")
    // console.log(req.params.company)
    details.findByCompany({ company:req.params.company })
    .then(dbresults => {
      // console.log("$$$$$$$")
      // console.log(dbresults)
      res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .put((req, res) => {
    // console.log("this is updating details info")
    // console.log(req.params.company)
    // console.log(req.body)
    details.update(req.params.company, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .delete((req, res) => {
    // console.log("this is req to delete company");
    // console.log(req.params.company)
    details.remove(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



module.exports = router;





