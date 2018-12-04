const router = require("express").Router();
const searchesRoutes = require("./searchesRouter");
const advertisementsRoutes = require("./advertisementsRouter");
const displayAdvertisementsRoutes = require("./displayAdvertisementsRouter");
const userAds = require("./userAds");
const admin = require("./admin");
const detailsRoutes = require("./detailsRouter");

//  routes
router.use("/searches", searchesRoutes);
router.use("/advertisements", advertisementsRoutes);
router.use("/displayads", displayAdvertisementsRoutes);
router.use("/details", detailsRoutes);

// router.use("/userAds", userAds);
// router.use("/admin", admin);

module.exports = router;
