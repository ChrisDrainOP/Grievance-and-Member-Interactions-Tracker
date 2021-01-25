const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = process.env.PORT || 5000;
require("dontenv").config();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};

const MONGO_URL = process.env.MONGO_URL_TEST;

mongoose.connect(MONGO_URL);
server.listen(port, () => {
  console.log(`Listening on ${port}`); //eslint-disable-line no-console
});

server.get("/express_backend", (req, res) => {
  res.send({ express: "Your Express Backend is Connected to React" });
});
