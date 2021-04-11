/* controllers/friend-controller.js: logic for user friend api routes */
const { User } = require("../models");

const friendController = {
    // add a friend to a user's list
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { friends: params.friendId } },
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

    // remove a friend from a user's list
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
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
    }
};

module.exports = friendController;