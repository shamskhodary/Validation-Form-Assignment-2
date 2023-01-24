const express = require("express");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const cors = require("cors");

const app = express();
app.set("port", process.env.PORT || 8080);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cors());
app.use("/api/v1", router);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
    status: err.status || 500,
  });
});

module.exports = app;
