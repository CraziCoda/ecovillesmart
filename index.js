const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");
const session = require("express-session");
const passport = require('passport');

dotenv.config();

const sequelize = require("./database/sequelize");
require("./auth/passport");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully with database.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const User = require("./database/model");

try {
  sequelize.sync();
} catch (error) {
  console.log(`Error: ${error}`);
}

const PORT = process.env.PORT || 2310;
const app = express();

app.use(logger("tiny"));
app.use(
  session({
    secret: "top dog 3",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session())

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));
