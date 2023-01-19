const dotenv = require('dotenv');
dotenv.config();

const { DB_URL } = process.env;

const config = {
  DB_URL,
};

module.exports = config;