require("dotenv").config(); // JWT requires this.

const express = require("express");
const db = require("./db/models/index");
const cookieParser = require("cookie-parser");
const pokemonRouter = require("./routes/pokemons.route");
const trainersRouter = require("./routes/trainers.js");
const app = express();

app.use(express.json());

// app.js Using a cookie Parser
app.use(cookieParser());

app.use("/pokemon", pokemonRouter);
app.use("/trainers", trainersRouter);

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
