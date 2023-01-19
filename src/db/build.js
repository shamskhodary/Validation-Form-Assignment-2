const Customer = require("../models/customer");
const sequelize = require("./connection");

const build = async () => {
  await Customer.sync({ force: true });
};

build()
  .then(() => console.log("Database built successfully"))
  .catch((err) => console.log(err));
