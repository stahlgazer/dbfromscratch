const db = require("../database/dbConfig.js");

module.exports = {
  findAll,
  findbyID,
  create,
  update,
  remove,
};

// returns all basic recipes for simple cards
function findAll() {
  return db("recipe");
}

// find recipe by id with steps included for detailed cards

async function findbyID(id) {
  const rows = await db("recipe as r")
    .leftJoin("step as s", "r.id", "=", "s.recipe_id")
    .select("r.*", "s.id as stepId", "s.number", "s.details", "s.recipe_id")
    .where("r.id", id);
  // console.log(rows) gives
  // {
  //   id: 1,
  //   name: 'recipe name1',
  //   author: 'recipe author1',
  //   description: 'recipe description1',
  //   ingredients: 'recipe ingredients1',
  //   category: 'breakfast',
  //   image: 'recipe image1',
  //   created_at: '2022-06-12 22:41:51',
  //   updated_at: '2022-06-12 22:41:51',
  //   stepId: 1,
  //   number: 1,
  //   details: 'updated this step from my update step wooohoooo!',
  //   recipe_id: 1
  // }
  const result = {
    id: rows[0].id,
    name: rows[0].name,
    author: rows[0].author,
    description: rows[0].description,
    ingredients: rows[0].ingredients,
    category: rows[0].category,
    image: rows[0].image,
    created: rows[0].created_at,
    updated: rows[0].updated_at,
    steps:
      rows[0].stepId === null
        ? []
        : rows.map((row) => ({
            id: row.stepId,
            number: row.number,
            details: row.details,
            recipeId: row.recipe_id,
          })),
  };
  return result;
}

// creat new recipe
function create(recipe) {
  return db("recipe").returning('id').insert(recipe);
}

// update existing recipe by id
function update(id, changes) {
  return db("recipe").where({ id }).update(changes);
}

// remove recipe by id
function remove(id) {
  return db("recipe").where({ id }).del();
}
