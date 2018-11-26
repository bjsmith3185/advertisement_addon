const router = require("express").Router();
const searchesController = require("../../controllers/searchesController");

// Matches with "/api/searches"

router.route("/")
  .get(searchesController.findAll)
  // .post(searchesController.create);
  .post(searchesController.update);



module.exports = router;