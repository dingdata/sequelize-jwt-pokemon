// config/database.js

module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "sequelize_jwt_pokemon_dev",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: null,
    database: "sequelize_jwt_pokemon_dev_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres",
  },
};
