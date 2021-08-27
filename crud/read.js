// crud/read.js
const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const findPokemonByName = async (name) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      name: {
        [Op.eq]: name,
      },
    },
  });
  console.log(`RESULT FOR findPokemonByName: ${foundPokemons.length}`);
  console.log(foundPokemons);
  return foundPokemons;
};

const findAllPokemons = async (name) => {
  const foundPokemons = await db.SimplePokemon.findAll();
  console.log(`RESULT FOR findPokemonByName: ${foundPokemons.length}`);
  console.log(foundPokemons);
  return foundPokemons;
};

module.exports = {
  findPokemonByName,
  findAllPokemons,
};
