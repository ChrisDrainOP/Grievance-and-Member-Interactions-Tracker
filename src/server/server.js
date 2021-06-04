//Require .env with path designated by node
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();
server.use(express.json());

const cookies = require("cookie-parser");
server.use(cookies());

server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const session = require("express-session");

//Connect to MongoDB database
const MONGO_URL = process.env.MONGO_URL_TEST;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
mongoose.connect(MONGO_URL, options);

//Load Passport instance
const passport = require("passport");
//Passport config
require("./models/GooglePassportStrategy")(passport);
require("./models/LocalPassportStrategy")(passport);

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
  resave: true,
  saveunitialized: true,
  cookie: {
    sameSite:'lax',
    //httpOnly: true,
    //secure: true,
    //maxAge: 14 * 24 * 60 * 60 * 1000,
  },
};
server.set("trust proxy", true);
server.use(session(sess));
//Passport middleware
server.use(passport.initialize());
server.use(passport.session());

const port = process.env.MONGO_APP_PORT || 5000;

//Routes
server.use("/", require("./routes/index"));
//Passport Google OAuth routes
server.use("/auth", require("./routes/auth"));
//Passport Local user routes
server.use("/users", require("./routes/users"));
server.use("/add", require("./controllers/createMeetings"));

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
