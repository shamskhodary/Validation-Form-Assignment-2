const sequelize = require("./connection");

const build = async () => {
  await sequelize.sync({ force: true });
};

build()
  .then(() => console.log("Database built successfully"))
  .catch((err) => console.log(err));
