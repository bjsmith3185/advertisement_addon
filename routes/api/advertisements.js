const router = require("express").Router();
const advertisements = require("../../controllers/advertisementsController");



// Matches with "/api/advertisements"

router.route("/")
  .get(advertisements.findAPageLoadAd)
  .post(advertisements.findSelectedAd)
  .put(advertisements.create);


module.exports = router;
