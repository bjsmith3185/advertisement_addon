const db = require("../models");
const randomAd = require("../advertisementMaker/randomAd.js");


module.exports = {
  findAll: function () {
    return db.UserAds
      .find({})
  },
  findByAd: function (company) {
    return db.UserAds
      .findByAd(company)
  },
  create: function (company) {
    // i can use the reference thing here and populate it
    // this insert will be directly from another collection
    console.log(`&&&&& company:`)
    console.log(company)
    return db.UserAds.create({
      company: company.company,
      keywords: company.keywords,
      image: company.image,
      link: company.link,
      description: company.description,
    })
  },
  update: function (company, data) {
    return db.UserAds
      .findOneAndUpdate({ company: company }, data)
  },
  remove: function (company) {
    return db.UserAds
    .findOneAndRemove({ company: company})
  }
};
