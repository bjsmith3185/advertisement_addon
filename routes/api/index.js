const router = require("express").Router();
const searchesRoutes = require("./searches");
const advertisementsRoutes = require("./advertisements");
const userAds = require("./userAds");
const admin = require("./admin");

//  routes
router.use("/searches", searchesRoutes);
router.use("/advertisements", advertisementsRoutes);
router.use("/userAds", userAds);
router.use("/admin", admin);

module.exports = router;
