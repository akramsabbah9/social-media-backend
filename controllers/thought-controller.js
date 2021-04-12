/* controllers/thought-controller.js: logic for thought api routes */
const { Thought, User } = require("../models");

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .select("-__v")
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // get one thought by id
    getOneThought({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select("-__v")
            .then(thoughtData => {
                if (!thoughtData) {
                    return res.status(404).json({ message: "No thought found with this id." });
                }
                res.json(thoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // create new thought and add to associated User's thought array
    createThought({ body }, res) {
        Thought.create(body)
            .then(thoughtData => {
                return User.findOneAndUpdate(
                    { username: body.username },
                    { $push: { thoughts: thoughtData._id } },
                    { new: true, runValidators: true }
                )
            })
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

    // update a thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { thoughtText: body.thoughtText }, // cannot change username!
            { new: true, runValidators: true }
        )
            .then(thoughtData => {
                if (!thoughtData) {
                    return res.status(404).json({ message: "No thought found with this id." });
                }
                res.json(thoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // delete a thought by id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(thoughtData => {
                if (!thoughtData) {
                    return res.status(404).json({ message: "No thought found with this id." });
                }
                res.json(thoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};

module.exports = thoughtController;