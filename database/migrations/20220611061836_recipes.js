exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (recipe) => {
      recipe.increments("id");
      recipe.string("name").notNullable().index();
      recipe.string("author").notNullable();
      recipe.string("description", 500).notNullable();
      recipe.string("ingredients", 500).notNullable();
      recipe.string("image", 500);
      recipe.timestamps(true, true);
    })
    .createTable("step", (step) => {
      step.increments("id");
      step.integer("number").notNullable();
      step.string("description", 500).notNullable();

      step.integer("recipe_id").notNullable().unsigned();
      step
        .foreign("recipe_id")
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      step.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("step").dropTableIfExists("recipe");
};
