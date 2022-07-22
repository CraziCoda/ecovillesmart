const Sequelize = require("sequelize");

const { SQL_HOST, SQL_DBNAME, SQL_PASSWORD, SQL_USERNAME } = process.env;

// Creating new Object of Sequelize
const sequelize = new Sequelize(
  //Database name
  SQL_DBNAME || "mysql",
  //Username
  SQL_USERNAME || "root",
  //Password
  SQL_PASSWORD || "password",
  {
    dialect: "mysql",
    host: SQL_HOST || "localhost",
  }
);

module.exports = sequelize;
