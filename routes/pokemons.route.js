const { request } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../db/models/index");

// route to GET /pokemons
router.get("/", async (req, res, next) => {
  try {
    const pokemons = await db.Pokemon.findAll();

    res.json(pokemons);
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const pokemons = await db.Pokemon.create(req.body);
    res.status(201).json(pokemons);
  } catch (error) {
    next(error);
  }
});

router.get("/search", async (req, res, next) => {
  //http://localhost:3000/pokemon/search?id=2&name=poke

  const pokemonId = req.query.id;
  const name = req.query.name;
  console.log(`this is pokemon ${pokemonId} - ${name}`);
  try {
    const pokemons = await db.Pokemon.findByPk(pokemonId);
    if (pokemons === null) {
      res.sendStatus(404); // return 404 if pokemon is null;
    } else {
      res.status(200).json(pokemons);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const pokemons = await db.Pokemon.findByPk(req.params.id);
    if (pokemons === null) {
      res.sendStatus(404); // return 404 if pokemon is null;
    } else {
      res.status(200).json(pokemons);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pokemons = await db.Pokemon.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
});

router.post("/update/:id", async (req, res, next) => {
  try {
    const idToUpdate = req.params.id;
    const reqBody = req.body;

    const [numberOfUpdatedRecord, updatedRecord] = await db.Pokemon.update(
      reqBody,
      {
        where: {
          id: idToUpdate,
        },
        returning: true,
      }
    );
    const returnMessage = `Number of Records Updated ${numberOfUpdatedRecord}`;
    console.log(numberOfUpdatedRecord);
    res.status(201).json({
      message: `${returnMessage} Updated ${updatedRecord} successfully!`,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const pokemonId = req.params.id;
    const pokemonToUpdate = await db.Pokemon.findByPk(pokemonId);

    if (pokemonToUpdate === null) return res.sendStatus(404);
    await pokemonToUpdate.update(req.body);

    res.json(pokemonToUpdate);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
