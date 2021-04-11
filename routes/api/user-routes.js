/* routes/api/user-routes.js: express routes for /api/users endpoint */
const router = require("express").Router();
const userController = require("../../controllers/user-controller");

// TODO: CRUD routes for /
router.route("/")
    .get(userController.getAllUsers);

// TODO: CRUD routes for /:id
router.route("/:id")
    .get(userController.getUserById);

// TODO: CRUD routes for /:userId/friends/:friendId

module.exports = router;