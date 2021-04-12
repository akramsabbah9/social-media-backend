/* routes/api/user-routes.js: express routes for /api/users endpoint */
const router = require("express").Router();
const userController = require("../../controllers/user-controller");
const friendController = require("../../controllers/friend-controller");

// routes for /api/users/
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);

// routes for api/users/:id
router.route("/:id")
    .get(userController.getOneUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

// routes for api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId")
    .post(friendController.addFriend)
    .delete(friendController.removeFriend);

module.exports = router;