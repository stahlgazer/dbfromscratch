const router = require("express").Router();
const Steps = require("../steps/stepHelpers");

// get all steps
router.get("/", (req, res) => {
  Steps.getSteps()
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to retrieve steps.` });
    });
});

// get steps with recipeID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Steps.getStepsByRecipeId(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res.status(500).json({
        error: `${error.message}, unable to retrieve steps for this recipe.`,
      });
    });
});

// create new step with recipeID
router.post("/:id", (req, res) => {
  const step = req.body;
  const recipeId = req.params.id;
  Steps.createStep(recipeId, step)
    .then((data) =>
      res.status(200).json({ message: `new step with id: ${data} created for recipeId: ${recipeId}` })
    )
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to create new step.` });
    });
});

module.exports = router;
