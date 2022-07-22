const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");

dotenv.config();

const sequilize = require('./database/sequilize');

const User = require('./database/model');

app.use(logger("tiny"));


sequilize.sync();

const PORT = process.env.PORT || 2310;
const app = express();


app.listen(PORT, ()=>console.log(`Server Running on port: ${PORT}`));