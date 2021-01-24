const express = require("express");
const server = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};

server.listen(port, () => {
  console.log(`Listening on ${port}`); //eslint-disable-line no-console
});

server.get("/express_backend", (req, res) => {
  res.send({ express: "Your Express Backend is Connected to React" });
});
