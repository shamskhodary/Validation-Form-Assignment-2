const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const Individual = sequelize.define('individual', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
});

module.exports = Individual;