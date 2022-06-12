const db = require("../database/dbConfig.js");

module.exports = {
  findAll,
  create,
  update,
  remove,
  findByID,
};

function findAll() {
  // returns all recipes
  return db("recipe");
}

function create() {}
// insert new recipe async

function update() {}
// update existing recipe

function findByID(id) {
  // find recipe by id
  return db("recipe").where({ id });
}

function remove(id) {
  // remove recipe by id
  return db("recipe").where({ id }).del();
}
