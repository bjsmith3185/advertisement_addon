const router = require("express").Router();
const searchesController = require("../../controllers/searchesController");

// Matches with "/api/searches"

router.route("/")
  .get(searchesController.findAll)
  .post(searchesController.create);



module.exports = router;