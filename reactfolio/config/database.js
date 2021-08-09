const { Sequelize } = require("sequelize");

// Passing a connection URI
const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname"); // Example for postgres

// Option 2: Passing parameters separately (other dialects)
module.exports = new Sequelize("reactfolio", "postgres", "root", {
  host: "localhost",
  dialect: "postgres" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});
