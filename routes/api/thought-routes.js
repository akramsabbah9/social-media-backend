/* routes/api/thought-routes.js: express routes for /api/thoughts endpoint */
const router = require("express").Router();
const thoughtController = require("../../controllers/thought-controller");
const reactionController = require("../../controllers/reaction-controller");

// routes for /api/thoughts/
router.route("/")
    .get(thoughtController.getAllThoughts)
    .post(thoughtController.createThought);

// routes for api/thoughts/:id
router.route("/:id")
    .get(thoughtController.getOneThought)
    .put(thoughtController.updateThought)
    .delete(thoughtController.deleteThought);

// route for api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(reactionController.addReaction);

// route for api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(reactionController.removeReaction);

module.exports = router;