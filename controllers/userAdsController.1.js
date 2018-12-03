const db = require("../models");
const randomAd = require("../advertisementMaker/randomAd.js");


module.exports = {
  findAll: function (req, res) {
    db.UserAds
      .find({})
      .then(dbModel => {
        // this function gets a random ad
        let value = randomAd.randomizeAds(dbModel)
        res.json(value)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.UserAds
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.UserAds
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.UserAds
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.UserAds
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
