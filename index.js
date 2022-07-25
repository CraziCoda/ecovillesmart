const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");

dotenv.config();

const sequelize = require("./database/sequelize");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
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

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));
