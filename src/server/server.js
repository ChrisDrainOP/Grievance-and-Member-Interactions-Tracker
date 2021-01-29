const express = require("express");
const mongoose = require("mongoose");
const server = express();

const User = require("./models/User");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const port = process.env.MONGO_APP_PORT || 5000;

const MONGO_URL = process.env.MONGO_URL_TEST;

mongoose.connect(MONGO_URL);

server.listen(port, () => {
  console.log(`Listening on ${port}`); //eslint-disable-line no-console
});

server.get("/express_backend", async (req, res) => {
  //const findEmail = { email: "team@builderbook.org" };
  const user = await User.findOne({ slug: "team-builder-book" });
  res.send({ user });
  console.log({ user });
});
