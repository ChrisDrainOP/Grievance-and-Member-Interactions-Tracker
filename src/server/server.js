//Require .env with path designated by node
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const express = require("express");
const mongoose = require("mongoose");

const server = express();
const session = require("express-session");

const passport = require("passport");

server.use(require("morgan")("combined"));

const mongoSessionStore = require("connect-mongo");
const MongoStore = mongoSessionStore(session);

//Session config
const sess = {
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 14 * 24 * 60 * 60,
  }),
  resave: false,
  saveunitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60 * 1000,
  },
};

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
server.use(session(sess));

//Passport config
require("./models/passport")(passport);

//Passport middleware
server.use(passport.initialize());
server.use(passport.session());

const port = process.env.MONGO_APP_PORT || 5000;

const MONGO_URL = process.env.MONGO_URL_TEST;

mongoose.connect(MONGO_URL, options);

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});

//Routes
server.use("/", require("./routes/index"));
server.use("/auth", require("./routes/auth"));
