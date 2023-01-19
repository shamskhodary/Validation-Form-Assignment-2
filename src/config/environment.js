const dotenv = require('dotenv');
dotenv.config();

const { DB_URL, SECRET_KEY } = process.env;

const config = {
  DB_URL,
  SECRET_KEY
};

module.exports = config;