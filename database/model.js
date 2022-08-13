const { Sequelize, DataTypes } = require("sequelize");
const { STRING, BOOLEAN, BLOB, INTEGER, DOUBLE, ARRAY } = DataTypes;
//Import Sequlize object
const sequelize = require("./sequelize");

const User = sequelize.define("user", {
  firstname: { type: STRING, allowNull: false },
  lastname: { type: STRING, allowNull: false },
  email: { type: STRING, allowNull: false },
  password: { type: STRING, allowNull: false },
  isAdmin: { type: BOOLEAN, allowNull: false, defaultValue: false },
  localsms_units: { type: DOUBLE, allowNull: true, defaultValue: 0 },
  intsms_units: { type: DOUBLE, allowNull: true, defaultValue: 0 },//international sms units
});

const Admin = sequelize.define("admin", {

})

const SMS = sequelize.define("sms", {
  senderID: {
    type: STRING,
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
  isDraft: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});

const Contacts = sequelize.define("contacts", {
  owner: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  contacts: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  }
});

module.exports = { User, SMS, Contacts };
