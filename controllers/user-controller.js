/* controllers/user-controller.js: logic for user api routes */
const { User } = require("../models");

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate(
                // { path: "thoughts", select: "-__v" },
                { path: "friends", select: "-__v -friends", options: { lean: true } }
            )
            .select("-__v")
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // get one user by id
    getOneUser({ params }, res) {
        User.findOne({ _id: params.id })
            .populate(
                // { path: "thoughts", select: "-__v" },
                { path: "friends", select: "-__v -friends", options: { lean: true } }
            )
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
    },

    // create new user
    createUser({ body }, res) {
        User.create(body)
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // update a user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
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
    },

    // delete a user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
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