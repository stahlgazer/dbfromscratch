const router = require("express").Router();
const Steps = require("../steps/stepHelpers");

router.get("/", (req, res) => {
  Steps.getSteps()
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({ error: `${error.message}, unable to retrieve steps.` });
    });
});

// id is the recipe id which will be in params with routing
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Steps.getStepsById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res
        .status(500)
        .json({
          error: `${error.message}, unable to retrieve steps for this recipe.`,
        });
    });
});

module.exports = router;
