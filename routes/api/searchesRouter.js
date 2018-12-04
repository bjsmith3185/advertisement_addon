const router = require("express").Router();
const searches = require("../../controllers/searchesController");

// Matches with "/api/searches"

router.route("/")
  .get((req, res) => {
    console.log("a request for all searches.")
    searches.findAll()
      .then(dbresults => {
        
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    console.log("post request to create")
    console.log(req.body)

    searches.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/remove")
  .delete((req, res) => {
    console.log("detete request")
    searches.remove()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")

  .get((req, res) => {
    console.log("a request for search results.")
    console.log(req.params.search)
    searches.findBySearch({ search:req.params.search })
    .then(dbresults => {
      console.log("$$$$$$$")
      console.log(dbresults)
      res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .put((req, res) => {
    console.log("this is updating searches info")
    console.log(req.params.search)
    console.log(req.body)
    searches.update(req.params.search, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .delete((req, res) => {
    console.log("this is req to delete search");
    console.log(req.params.search)
    searches.remove(req.params.search)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



module.exports = router;




