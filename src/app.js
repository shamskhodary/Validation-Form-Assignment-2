const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const sequelize = require('./db/connection');
const router = require('./routes');


const app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use('/api/v1', router)

// const conn = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');

//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// conn()

module.exports = app;