const Sequelize = require("sequelize");
const config = require("../config/environment");

const sequelize = new Sequelize(config.DB_URL);

module.exports = sequelize;