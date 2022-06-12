const db = require("../database/dbConfig.js");

module.exports = {
  createStep,
  findStepsByRecipeId,
  updateByStepId,
  removeByStepId,
};

function createStep(step) {
  // insert async ?
  return db("step")
    .insert(step, "id")
    .then((ids) => {
      console.log(ids);
      const [id] = ids;
      return id;
    });
}

function findStepsByRecipeId(id) {
  return db("step").where({ recipe_id: id });
}

function updateByStepId(id, changes) {
  return db("step").where({ id }).update(changes);
}

function removeByStepId(id) {
  return db("step").where({ id }).del();
}
