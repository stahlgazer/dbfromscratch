const db = require("../database/dbConfig.js");

module.exports = {
  getSteps,
  getStepsByRecipeId,
  createStep,
  updateByStepId,
  removeByStepId,
};

// get all steps
function getSteps() {
  return db("step");
}

// get steps for recipe by recipe ID
function getStepsByRecipeId(recipe_id) {
  return db("step").where({ recipe_id });
}

// insert new step by recipe ID
function createStep(recipe_id, step) {
  return db("step").where({ recipe_id }).insert(step);
}

// update step by step id
function updateByStepId(id, changes) {
  return db("step").where({ id }).update(changes);
}

// remove step by step id
function removeByStepId(id) {
  return db("step").where({ id }).del();
}
