exports.seed = async function (knex) {
  await knex("step").del();
  await knex("recipe").del();
  await knex("recipe").insert([
    {
      id: 1,
      name: "recipe name1",
      author: "recipe author1",
      description: "recipe description1",
      ingredients: "recipe ingredients1",
      category: "breakfast",
      image: "recipe image1",
    },
    {
      id: 2,
      name: "recipe name2",
      author: "recipe author2",
      description: "recipe description2",
      ingredients: "recipe ingredients2",
      category: "lunch",
      image: "recipe image2",
    },
    {
      id: 3,
      name: "recipe name3",
      author: "recipe author3",
      description: "recipe description3",
      ingredients: "recipe ingredients3",
      category: "dinner",
      image: "recipe image3",
    },
  ]);
  await knex("step").insert([
    {
      id: 1,
      number: 1,
      details: "step1 details for recipe 1",
      recipe_id: 1,
    },
    {
      id: 2,
      number: 2,
      details: "step2 details for recipe 1",
      recipe_id: 1,
    },
    {
      id: 3,
      number: 1,
      details: "step1 details for recipe 2",
      recipe_id: 2,
    },
    {
      id: 4,
      number: 2,
      details: "step2 details for recipe 2",
      recipe_id: 2,
    },
    {
      id: 5,
      number: 1,
      details: "step1 details for recipe 3",
      recipe_id: 3,
    },
  ]);
};
