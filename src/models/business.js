const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const Business = sequelize.define('business', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  companyName: {
    type: DataTypes.STRING,
  },
  taxId: {
    type: DataTypes.INTEGER,
  },
  customerId: {
    type: DataTypes.INTEGER,
  }
});

module.exports = Business;