const { Sequelize } = require("sequelize");
const { host, database, user, password, databasetype } = require('../config/db.config')
const { SQL_HOST, SQL_DBNAME, SQL_PASSWORD, SQL_USERNAME } = process.env;

try {
  // init sequalize connection
  module.exports = new Sequelize(database, user, password, {
    host: host,
    logging: false,
    dialect: databasetype,
    storage: './session.mysql',
    define: {
      timestamps: false
    }
  })
} catch (err) {
  console.log('err connecting to db')
}

