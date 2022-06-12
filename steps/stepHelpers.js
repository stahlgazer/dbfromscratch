const db = require("../database/dbConfig.js");

module.exports = {
  createStep,
  updateByStepId,
  removeByStepId,
};

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
