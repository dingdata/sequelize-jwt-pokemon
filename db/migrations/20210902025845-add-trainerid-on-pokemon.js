"use strict";

module.exports = {
  //add column
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Pokemons", "trainerId", Sequelize.INTEGER);
  },

  //undo
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pokemons", "trainerId");
  },
};
