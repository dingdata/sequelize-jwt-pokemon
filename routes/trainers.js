const express = require("express");
const db = require("../models/index");

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

module.exports = router;
