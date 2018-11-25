const router = require("express").Router();
const userAdsController = require("../../controllers/userAdsController");

// Matches with "/api/users"

router.route("/")
  .get(userAdsController.findAll)
  .post(userAdsController.create);
  

module.exports = router;