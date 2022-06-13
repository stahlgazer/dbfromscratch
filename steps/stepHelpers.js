const db = require("../database/dbConfig.js");

module.exports = {
  getSteps,
  getStepsById,
  createStep,
  updateByStepId,
  removeByStepId,
};

// get all steps
function getSteps(){
  return db("step")
}

// get steps for recipe by ID
function getStepsById(recipe_id) {
  return db("step").where({recipe_id});
}

// insert new step to recipe
function createStep(step, recipeId) {
  
}

// update step by id
function updateByStepId(id, changes) {
  return db("step").where({ id }).update(changes);
}

// remove step by id
function removeByStepId(id) {
  return db("step").where({ id }).del();
}
