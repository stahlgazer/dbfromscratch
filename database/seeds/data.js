exports.seed = async function (knex) {
  await knex("step").del();
  await knex("recipe").del();
  await knex("recipe").insert([
    {
      name: "Mac and Cheese",
      author: "gstahlbaby",
      description: "The ooeyest and gooeyest cheesy goodness",
      ingredients: "cheese, pasta, milk, butter, seasoning",
      category: "dinner",
      image:
        "https://www.seriouseats.com/thmb/qzfKv8Tm86wx90W0HLskO52W-Lg=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210214-stovetop-mac-cheese-reshoot-vicky-wasik-9-0760b642ca704cf8b2c5121a363a60a2.jpg",
    },
    {
      name: "French Toast",
      author: "gstahlbaby",
      description: "delicious and simple French toast",
      ingredients: "bread, butter, maple syrup, cinnamon, sugar",
      category: "breakfast",
      image:
        "https://www.seriouseats.com/thmb/O1-dTHGmNqo9dUpPHR5LW9DOFA0=/1125x1125/smart/filters:no_upscale()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg",
    },
    {
      name: "Spaghetti Bolognese",
      author: "gstahlbaby",
      description: "A classic Italian dish with a rich and meaty tomato sauce.",
      ingredients:
        "spaghetti, ground beef, onions, garlic, tomatoes, tomato paste, olive oil, basil, salt, pepper, Parmesan cheese",
      category: "dinner",
      image:
        "https://www.seriouseats.com/thmb/1FilYRIx9EWflwvXQ6N8nw3cKR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-best-slow-cooked-bolognese-sauce-recipe-hero-03_1-3bf4f3401fa84c828f68071df496ddd3.JPG",
    },
    {
      name: "Chicken Caesar Salad",
      author: "gstahlbaby",
      description:
        "A refreshing salad with grilled chicken, crisp romaine lettuce, and Caesar dressing.",
      ingredients:
        "chicken breasts, romaine lettuce, croutons, Parmesan cheese, Caesar dressing",
      category: "lunch",
      image:
        "https://www.seriouseats.com/thmb/9TnG8tGrg-1V65xKR6Y8hJu8YJ4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
    },
    {
      name: "Chocolate Chip Cookies",
      author: "gstahlbaby",
      description:
        "Classic homemade chocolate chip cookies that are soft and chewy.",
      ingredients:
        "butter, sugar, brown sugar, eggs, vanilla extract, flour, baking soda, salt, chocolate chips",
      category: "dessert",
      image:
        "https://www.seriouseats.com/thmb/Yp9Ki3R4hXlFUpgxU6dIPuX7su0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__12__20131213-chocolate-chip-cookies-food-lab-55-edit-04edd98fcca7457281abbf6eac559bfc.jpg",
    },
    {
      name: "Cheetos",
      author: "gstahlbaby",
      description: "Homemade cheesy Cheetos for a delicious snack",
      ingredients: "cornmeal, cheddar cheese, butter, salt, paprika",
      category: "snack",
      image:
        "https://www.seriouseats.com/thmb/J2LRgwz_RkTf_LO93_dohx8bKHU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__02__20130226-241927-cook-the-book-cheetos-da1dcc9470f742e2a8d6970202c65ddb.jpg",
    },
    {
      name: "Blueberry Pancakes",
      author: "vapegazer",
      description:
        "Fluffy pancakes with fresh blueberries, perfect for breakfast.",
      ingredients: "pancake mix, blueberries, maple syrup",
      category: "breakfast",
      image:
        "https://pinchofyum.com/wp-content/uploads/Blueberry-Pancakes-Feature-1.jpg",
    },
    {
      name: "Chocolate Cake",
      author: "Jeff",
      description: "Indulge in a rich and moist chocolate cake for dessert.",
      ingredients: "chocolate, flour, sugar, eggs, cocoa powder",
      category: "dessert",
      image:
        "https://www.loveandoliveoil.com/wp-content/uploads/2022/01/sour-cream-chocolate-cake-5.jpg",
    },
    {
      name: "Cheeseburger",
      author: "martin",
      description:
        "Savor the classic taste of a juicy cheeseburger with all your favorite fixings.",
      ingredients: "ground beef, grilled onions, buns, cheese, condiments",
      category: "dinner",
      image:
        "https://www.thecookierookie.com/wp-content/uploads/2021/04/featured-onion-swiss-burgers-recipe.jpg",
    },
    {
      name: "Pizza",
      author: "demo",
      description:
        "Indulge in a delicious homemade pizza with your favorite toppings.",
      ingredients: "pizza dough, pizza sauce, cheese, pepperoni, vegetables",
      category: "dinner",
      image:
        "https://thefoodcharlatan.com/wp-content/uploads/2021/08/Homemade-Pizza-Recipe-1-Hour-or-Overnight-20.jpg",
    },
  ]);
  await knex("step").insert([
    {
      number: 1,
      details:
        "Boil a large pot of salted water. Cook the pasta according to the package instructions until al dente. Drain and set aside.",
      recipe_id: 1,
    },
    {
      number: 2,
      details:
        "In a saucepan, melt butter over medium heat. Stir in flour to create a roux. Cook for 2 minutes, stirring constantly.",
      recipe_id: 1,
    },
    {
      number: 3,
      details:
        "Gradually whisk in milk until the mixture thickens. Bring to a simmer and cook for 2-3 minutes, stirring constantly.",
      recipe_id: 1,
    },
    {
      number: 4,
      details:
        "Stir in shredded cheese until smooth. Season with salt and pepper. Remove from heat.",
      recipe_id: 1,
    },
    {
      number: 5,
      details:
        "Combine the cooked pasta and cheese sauce. Mix well and serve hot.",
      recipe_id: 1,
    },
    {
      number: 1,
      details:
        "In a shallow dish, whisk together eggs, milk, cinnamon, and sugar.",
      recipe_id: 2,
    },
    {
      number: 2,
      details:
        "Heat a skillet or griddle over medium-high heat. Melt butter in the skillet.",
      recipe_id: 2,
    },
    {
      number: 3,
      details:
        "Dip slices of bread into the egg mixture, allowing them to soak for a few seconds on each side.",
      recipe_id: 2,
    },
    {
      number: 4,
      details:
        "Place the soaked bread slices on the hot skillet. Cook until golden brown on both sides.",
      recipe_id: 2,
    },
    {
      number: 5,
      details: "Serve the French toast hot, drizzled with maple syrup.",
      recipe_id: 2,
    },
    {
      number: 1,
      details:
        "Boil a large pot of salted water. Cook the spaghetti according to the package instructions until al dente. Drain and set aside.",
      recipe_id: 3,
    },
    {
      number: 2,
      details:
        "In a large skillet, heat olive oil over medium-high heat. Add chopped onions and garlic. Sauté until translucent.",
      recipe_id: 3,
    },
    {
      number: 3,
      details:
        "Add ground beef to the skillet. Cook and break it apart with a spoon until browned and cooked through.",
      recipe_id: 3,
    },
    {
      number: 4,
      details:
        "Stir in diced tomatoes and tomato paste. Season with basil, salt, and pepper. Simmer for 20 minutes.",
      recipe_id: 3,
    },
    {
      number: 5,
      details:
        "Serve the Bolognese sauce over cooked spaghetti. Sprinkle with grated Parmesan cheese and garnish with basil leaves.",
      recipe_id: 3,
    },
    {
      number: 1,
      details:
        "Grill chicken breasts until cooked through, about 6-8 minutes per side. Let them rest for a few minutes, then slice them into strips.",
      recipe_id: 4,
    },
    {
      number: 2,
      details: "Wash and chop romaine lettuce. Place it in a large salad bowl.",
      recipe_id: 4,
    },
    {
      number: 3,
      details:
        "Add croutons to the salad bowl and sprinkle with grated Parmesan cheese.",
      recipe_id: 4,
    },
    {
      number: 4,
      details:
        "Drizzle Caesar dressing over the salad and toss to coat evenly.",
      recipe_id: 4,
    },
    {
      number: 5,
      details: "Top the salad with grilled chicken strips. Serve immediately.",
      recipe_id: 4,
    },
    {
      number: 1,
      details:
        "Preheat the oven to 350°F (175°C). Line baking sheets with parchment paper.",
      recipe_id: 5,
    },
    {
      number: 2,
      details:
        "In a large mixing bowl, cream together softened butter, white sugar, and brown sugar until smooth.",
      recipe_id: 5,
    },
    {
      number: 3,
      details: "Beat in eggs one at a time, then stir in vanilla extract.",
      recipe_id: 5,
    },
    {
      number: 4,
      details:
        "In a separate bowl, whisk together flour, baking soda, and salt. Gradually add this dry mixture to the butter mixture and mix well.",
      recipe_id: 5,
    },
    {
      number: 5,
      details:
        "Fold in chocolate chips. Drop rounded tablespoons of cookie dough onto the prepared baking sheets.",
      recipe_id: 5,
    },
    {
      number: 6,
      details:
        "Bake in the preheated oven for 10-12 minutes, or until the edges are lightly golden. Let the cookies cool on the baking sheets for a few minutes before transferring them to wire racks to cool completely.",
      recipe_id: 5,
    },
    {
      number: 1,
      details:
        "Preheat your oven to 350°F (175°C). Line a baking sheet with parchment paper.",
      recipe_id: 6,
    },
    {
      number: 2,
      details:
        "In a mixing bowl, combine 1 cup of cornmeal, 1 cup of grated cheddar cheese, 2 tablespoons of melted butter, 1/2 teaspoon of salt, and 1/2 teaspoon of paprika.",
      recipe_id: 6,
    },
    {
      number: 3,
      details: "Mix the ingredients until a dough-like consistency forms.",
      recipe_id: 6,
    },
    {
      number: 4,
      details:
        "Form the mixture into small Cheetos-like shapes using your hands or by rolling small portions into logs.",
      recipe_id: 6,
    },
    {
      number: 5,
      details:
        "Place the shaped Cheetos on the prepared baking sheet, leaving some space between each.",
      recipe_id: 6,
    },
    {
      number: 6,
      details:
        "Bake in the preheated oven for about 15-20 minutes or until the Cheetos turn golden brown and crispy.",
      recipe_id: 6,
    },
    {
      number: 7,
      details:
        "Remove from the oven and let them cool for a few minutes before enjoying your homemade Cheetos.",
      recipe_id: 6,
    },
    // Steps for "Blueberry Pancakes" (recipe_id: 7)
    {
      number: 1,
      details: "Mix pancake mix and water in a bowl until smooth.",
      recipe_id: 7,
    },
    {
      number: 2,
      details: "Fold in fresh blueberries into the pancake batter.",
      recipe_id: 7,
    },
    {
      number: 3,
      details:
        "Heat a non-stick skillet over medium-high heat and pour in the pancake batter.",
      recipe_id: 7,
    },
    {
      number: 4,
      details:
        "Cook until bubbles form on the surface, then flip and cook until golden brown.",
      recipe_id: 7,
    },
    {
      number: 5,
      details: "Serve with maple syrup and extra blueberries on top.",
      recipe_id: 7,
    },
    // Steps for "Chocolate Cake" (recipe_id: 8)
    {
      number: 1,
      details: "Preheat your oven to 350°F (175°C) and grease a cake pan.",
      recipe_id: 8,
    },
    {
      number: 2,
      details:
        "In a mixing bowl, combine chocolate, flour, sugar, eggs, and cocoa powder.",
      recipe_id: 8,
    },
    {
      number: 3,
      details: "Pour the batter into the cake pan and smooth the top.",
      recipe_id: 8,
    },
    {
      number: 4,
      details: "Bake for 30-35 minutes, or until a toothpick comes out clean.",
      recipe_id: 8,
    },
    {
      number: 5,
      details:
        "Let the cake cool, then frost with your favorite chocolate frosting.",
      recipe_id: 8,
    },
    // Steps for "Cheeseburger" (recipe_id: 9)
    {
      number: 1,
      details: "Preheat your grill or stovetop skillet to medium-high heat.",
      recipe_id: 9,
    },
    {
      number: 2,
      details:
        "Form ground beef into patties, season with salt and pepper, and grill to desired doneness.",
      recipe_id: 9,
    },
    {
      number: 3,
      details:
        "Grill the onions until lightly browned and toast hamburger buns.",
      recipe_id: 9,
    },
    {
      number: 4,
      details:
        "Place cooked patties with cheese on the buns with grilled onions.",
      recipe_id: 9,
    },
    {
      number: 5,
      details:
        "Add condiments and any desired toppings, then cover with the other half of the bun.",
      recipe_id: 9,
    },
    // Steps for "Pizza" (recipe_id: 10)
    {
      number: 1,
      details:
        "Preheat your oven to 475°F (245°C) and place a pizza stone or baking sheet inside to heat.",
      recipe_id: 10,
    },
    {
      number: 2,
      details:
        "Roll out pizza dough on a floured surface to your desired thickness.",
      recipe_id: 10,
    },
    {
      number: 3,
      details:
        "Spread pizza sauce over the dough, leaving a border for the crust.",
      recipe_id: 10,
    },
    {
      number: 4,
      details:
        "Add your favorite toppings, such as cheese, pepperoni, and vegetables.",
      recipe_id: 10,
    },
    {
      number: 5,
      details:
        "Carefully transfer the pizza onto the hot stone or baking sheet and bake until the crust is golden and the cheese is bubbly.",
      recipe_id: 10,
    },
  ]);
};
