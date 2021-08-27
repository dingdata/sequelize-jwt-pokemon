const express = require("express");
const db = require("./db/models/index");
const app = express();

app.use(express.json());

db.sequelize.sync();

app.get("/", function (req, res) {
  res.send("Hello World!");
});
// default error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
