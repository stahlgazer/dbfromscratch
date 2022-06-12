const router = require("express").Router();
const Recipes = require("../recipes/recipeHelpers");

router.get("/", (req, res) => {
  Recipes.findAll()
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to retrieve recipes.` });
    });
});

module.exports = router;