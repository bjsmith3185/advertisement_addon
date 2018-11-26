const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/usersearches"
);


const advertisementsSeed = [
  {
    company: "Amazon",
    keywords: ["books", "tv", "games"],
  },
  {
    company: "Walmart",
    keywords: ["bread", "milk", "cheese", "eggs"],
  },
  {
    company: "Dicks",
    keywords: ["camping", "running", "hiking"],
  }
];

const searchesSeed = [
  {
    search: "books"
  },
  {
    search: "running"
  },
];

const userads = [{

}];

db.Advertisements
  .remove({})
  .then(() => db.Advertisements.collection.insertMany(advertisementsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Searches
  .remove({})
  .then(() => db.Searches.collection.insertMany(searchesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });




