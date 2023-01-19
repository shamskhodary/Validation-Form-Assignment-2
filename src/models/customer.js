const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');


const Customer = sequelize.define('Customer', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
  },
  taxId: {
    type: DataTypes.NUMBER,
  },
  type: {
    type: DataTypes.ENUM('individual', 'business'),
    allowNull: false,
  },
})


module.exports = Customer;