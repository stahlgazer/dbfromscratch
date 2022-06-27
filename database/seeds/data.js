exports.seed = async function (knex) {
  await knex("step").del();
  await knex("recipe").del();
  await knex("recipe").insert([
    {
      name: "Mac and Cheese",
      author: "gstahlbaby",
      description: "The oooooest and goooooest cheeesy goodness",
      ingredients: "cheese, pasta, milk, butter, seasoning",
      category: "dinner",
      image:
        "https://www.seriouseats.com/thmb/qzfKv8Tm86wx90W0HLskO52W-Lg=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210214-stovetop-mac-cheese-reshoot-vicky-wasik-9-0760b642ca704cf8b2c5121a363a60a2.jpg",
    },
    {
      name: "French Toast",
      author: "gstahlbaby",
      description: "delicious and simple french toast",
      ingredients: "bread, butter, maple syrup, cinnamon, sugar",
      category: "breakfast",
      image:
        "https://www.seriouseats.com/thmb/O1-dTHGmNqo9dUpPHR5LW9DOFA0=/1125x1125/smart/filters:no_upscale()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg",
    },
    {
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
      number: 1,
      details: "step1 details for recipe 1",
      recipe_id: 1,
    },
    {
      number: 2,
      details: "step2 details for recipe 1",
      recipe_id: 1,
    },
    {
      number: 1,
      details: "step1 details for recipe 2",
      recipe_id: 2,
    },
    {
      number: 2,
      details: "step2 details for recipe 2",
      recipe_id: 2,
    },
    {
      number: 1,
      details: "step1 details for recipe 3",
      recipe_id: 3,
    },
  ]);
};
