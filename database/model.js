const Sequelize = require("sequelize");

//Import Sequlize object
const sequelize = require("./sequilize");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  isAdmin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  localSMSPoints: { type: Sequelize.DOUBLE, allowNull: true, defaultValue: 0 },
  intSMSPoints: { type: Sequelize.DOUBLE, allowNull: true, defaultValue: 0 },
});

const SMS = sequelize.define("sms", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  senderID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isSent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

const Contacts = sequelize.define("contacts", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  owner: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  contacts: {
    type: Sequelize.ARRAY,
    defaultValue: []
  }
});

module.exports = User;
