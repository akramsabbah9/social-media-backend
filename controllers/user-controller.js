/* controllers/user-controller.js: logic for user api routes */

const { User } = require("../models");

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: "friends",
                select: "-__v"
            })
            .select("-__v")
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // get one user
    getUserById({ params }, res) {
        Pizza.findOne({ _id: params.id })
            .populate({
                path: "friends",
                select: "-__v"
            })
            .select("-__v")
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: "No user found with this id." });
                }
                res.json(userData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};

module.exports = userController;