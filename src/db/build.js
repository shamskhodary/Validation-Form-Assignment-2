const Business = require("../models/business");
const Customer = require("../models/customer");

const build = async () => {
  await Customer.sync({ force: true })
  await Business.sync({ force: true })
};

build()
  .then(() => console.log("Database built successfully"))
  .catch((err) => console.log(err));
