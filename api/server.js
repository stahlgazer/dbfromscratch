const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const recipeRouter = require("../recipes/recipeRouter.js");
const stepRouter = require("../steps/stepRouter.js");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/recipes", recipeRouter);
server.use("/steps", stepRouter);

server.get("/", (req, res) => {
  res.send("<h1>API is currently online!</h1>");
});

module.exports = server;
