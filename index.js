const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");

dotenv.config();
const PORT = process.env.PORT || 2310;
const app = express();


app.listen(PORT, ()=>console.log(`Server Running on port: ${PORT}`));