const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const Business = sequelize.define('business', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
});

module.exports = Business;