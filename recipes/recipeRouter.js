const router = require("express").Router();
const Recipes = require("../recipes/recipeHelpers");

// get all recipes simple details
router.get("/", (req, res) => {
  Recipes.findAll()
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to retrieve recipes.` });
    });
});

// get recipe by id in params and display steps!!!
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Recipes.findbyID(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to retrieve recipe.` });
    });
});

// create new recipe
router.post("/", (req, res) => {
  Recipes.create(req.body)
    .then((data) => res.status(200).json({ created: Number(data) }))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to create new recipe.` });
    });
});

// update recipe by id in params
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Recipes.update(id, changes)
    .then((data) => res.status(200).json({ updated: id }))
    .catch((error) => {
      res.status(500).json({
        error: `${error.message}, unable to update recipe with id: ${id}.`,
      });
    });
});

// delete recipe by id in params
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
