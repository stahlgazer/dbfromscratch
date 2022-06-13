const db = require("../database/dbConfig.js");

module.exports = {
  findAll,
  findByID,
  create,
  update,
  remove,
};

// returns all recipes
function findAll() {
  return db("recipe");
}

// find recipe by id
function findByID(id) {
  return db("recipe").where({ id });
}

// insert new recipe
function create(recipe) {
  return db("recipe").insert(recipe);
}

// update existing recipe
function update(id, changes) {
  return db("recipe").where({ id }).update(changes);
}

// remove recipe by id
function remove(id) {
  return db("recipe").where({ id }).del();
}
