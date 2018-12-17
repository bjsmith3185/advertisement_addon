const router = require("express").Router();
const searchesRoutes = require("./searchesRouter");
const advertisementsRoutes = require("./advertisementsRouter");
const displayAdvertisementsRoutes = require("./displayAdvertisementsRouter");
// const userAds = require("./userAds");
// const admin = require("./admin");
const detailsRoutes = require("./detailsRouter");
const modifyRoutes = require("./modifyRouter");
const populateRoutes = require("./populateRouter");

//  routes
router.use("/searches", searchesRoutes);
router.use("/advertisements", advertisementsRoutes);
router.use("/displayads", displayAdvertisementsRoutes);
router.use("/details", detailsRoutes);
router.use("/modify", modifyRoutes);

// populate routes
router.use("/populate", populateRoutes);
// router.use("/userAds", userAds);
// router.use("/admin", admin);

module.exports = router;
