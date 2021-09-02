"use strict";

module.exports = {
  //add column
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Pokemons", "trainerId", Sequelize.STRING);
  },

  //undo
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pokemons", "trainerId");
  },
};
