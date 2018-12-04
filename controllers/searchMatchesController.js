const db = require("../models");

module.exports = {
  findAll: function () {
    return db.SearchMatches
      .find({})
  },
  findBySearch: function (search) {
    return db.SearchMatches
      .findBySearch(search)
  },
  create: function (data) {
    console.log(`creating searchMatches entery`)
    console.log(data)
    return db.SearchMatches.create({
      search: data.search,
      company: data.company,
      keywords: data.keywords,
    })
  },
  update: function (search, data) {
    return db.SearchMatches
      .findOneAndUpdate({ search: search }, data)
  },
  remove: function (data) {
    return db.SearchMatches
    .findOneAndRemove({ search: data})
  }
};
