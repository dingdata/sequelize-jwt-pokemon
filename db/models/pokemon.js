"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pokemon.belongsTo(models.Trainer, {
        foreignKey: "trainerId",
        allowNull: true,
      });
    }
  }
  Pokemon.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        empty: false,
      },
      japaneseName: {
        type: DataTypes.STRING,
      },
      baseHP: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
      },
      trainerId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Pokemon",
    }
  );
  return Pokemon;
};
