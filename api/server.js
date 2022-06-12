const express = require("express");
const server = express();
server.use(express.json());
const recipeRouter = require('../recipes/recipeRouter.js');

server.use('/api/recipes', recipeRouter)

server.get("/", (req, res) => {
  res.send("<h1>API is currently online!</h1>");
});

module.exports = server;
