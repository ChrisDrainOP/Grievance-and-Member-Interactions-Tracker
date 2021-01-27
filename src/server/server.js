const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const express = require("express");
const mongoose = require("mongoose");
const server = express();

const port = process.env.PORT || 5000;

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
const User = require("./models/User");

const MONGO_URL = process.env.MONGO_URL_TEST;

mongoose.connect(MONGO_URL, options);
server.listen(port, () => {
  console.log(`Listening on ${port}`); //eslint-disable-line no-console
});

server.get("/express_backend", (req, res) => {
  res.send("Still Working!");
});

console.log(MONGO_URL);
