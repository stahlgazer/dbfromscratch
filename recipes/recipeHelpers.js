const db = require("../database/dbConfig.js");

module.exports = {
  findAll,
  create,
  update,
  remove,
  findByID,
};

// returns all recipes with steps
function findAll() {
  return db("recipe");
}
// find recipe by id
function findByID(id) {
  return db("recipe").where({ id });
}

// insert new recipe
function create() {}

// update existing recipe
function update() {}

// remove recipe by id
function remove(id) {
  return db("recipe").where({ id }).del();
}
