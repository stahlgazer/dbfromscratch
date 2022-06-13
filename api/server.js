const express = require("express");
const server = express();
server.use(express.json());
const recipeRouter = require("../recipes/recipeRouter.js");
const stepRouter = require("../steps/stepRouter.js");

server.use("/api/recipes", recipeRouter);
server.use("/api/steps", stepRouter);

server.get("/", (req, res) => {
  res.send("<h1>API is currently online!</h1>");
});

module.exports = server;
