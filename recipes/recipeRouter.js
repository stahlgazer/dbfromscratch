const router = require("express").Router();
const Recipes = require("../recipes/recipeHelpers");

// get all recipes
router.get("/", (req, res) => {
  Recipes.findAll()
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to retrieve recipes.` });
    });
});

// get recipe by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Recipes.findByID(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to retrieve recipes.` });
    });
});

// create new recipe
router.post("/", (req, res) => {
  Recipes.create(req.body)
    .then((data) =>
      res
        .status(200)
        .json({ message: `successfully created recipe with id: ${data}` })
    )
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to create new recipe.` });
    });
});

// update recipe by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Recipes.update(id, changes)
    .then((data) =>
      res.status(200).json({ message: `updated ${data} recipe with id: ${id}` })
    )
    .catch((error) => {
      res.status(500).json({
        error: `${error.message}, unable to update recipe with id: ${id}.`,
      });
    });
});

// delete recipe by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Recipes.remove(id)
    .then((data) => {
      data === 0
        ? res
            .status(200)
            .json({ message: `recipe with this id does not exist` })
        : res
            .status(200)
            .json({ message: `removed ${data} recipe with id: ${id}` });
    })

    .catch((error) => {
      res.status(500).json({
        error: `${error.message}, unable to delete recipe with id: ${id}.`,
      });
    });
});

module.exports = router;
