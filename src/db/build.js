const Customer = require("../models/customer");
const Business = require("../models/business");
const Individual = require("../models/individual");

const build = async () => {
  await Customer.sync({ force: true });
  await Business.sync({ force: true });
  await Individual.sync({ force: true });
};

build()
  .then(() => console.log("Database built successfully"))
  .catch((err) => console.log(err));
