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
  return db("recipe").join("step", "recipe.id", "=", "step.recipe_id");
}

// insert new recipe
function create() {}

// update existing recipe
function update() {}

// find recipe by id
function findByID(id) {
  return db("recipe").where({ id });
}

// remove recipe by id
function remove(id) {
  return db("recipe").where({ id }).del();
}
