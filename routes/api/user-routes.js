/* routes/api/user-routes.js: express routes for /api/users endpoint */
const router = require("express").Router();
const userController = require("../../controllers/user-controller");

// CRUD routes for /
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);

// CRUD routes for /:id
router.route("/:id")
    .get(userController.getOneUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

// TODO: CRUD routes for /:userId/friends/:friendId

module.exports = router;