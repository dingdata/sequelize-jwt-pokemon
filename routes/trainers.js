const express = require("express");
const db = require("../db/models/index");
const { auth } = require("../middleware/auth"); // auth middleware for authentication
const router = express.Router();

// Add POST /trainers route
router.post("/", async (req, res) => {
  try {
    const newTrainer = await db.Trainer.create(req.body);
    res.send(newTrainer);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/", async (req, res) => {
  try {
    //const trainers = await db.Trainer.findAll();
    const trainers = await db.Trainer.findAll({
      // exclude password field
      attributes: {
        exclude: ["password"],
      },
    });

    res.json(trainers);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/search/:username", async (req, res, next) => {
  try {
    const username = req.params.username;
    // [db.Sequelize.Op.iLike] allows you to do case-insensitive + partial querying
    // e.g. "Sa" will return Samantha, Samuel..
    const trainer = await db.Trainer.findAll({
      where: { username: { [db.Sequelize.Op.iLike]: "%" + username + "%" } },
      attributes: {
        exclude: ["password"],
      },
    });
    res.send(trainer);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
