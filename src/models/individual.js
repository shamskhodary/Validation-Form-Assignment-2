const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const individual = sequelize.define('individual', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
});

module.exports = individual;