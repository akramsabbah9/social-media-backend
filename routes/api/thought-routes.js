/* routes/api/thought-routes.js: express routes for /api/thoughts endpoint */
const router = require("express").Router();
const thoughtController = require("../../controllers/thought-controller");

// routes for /api/thoughts/
router.route("/")
    .get(thoughtController.getAllThoughts)
    .post(thoughtController.createThought);

// routes for api/thoughts/:id
router.route("/:id")
    .get(thoughtController.getOneThought)
    .put(thoughtController.updateThought)
    .delete(thoughtController.deleteThought);

module.exports = router;