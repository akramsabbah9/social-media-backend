/* controllers/thought-controller.js: logic for thought api routes */
const { Thought } = require("../models");

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate(
                // { path: "reactions", select: "-__v" }
            )
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
            .populate(
                // { path: "reactions", select: "-__v" }
            )
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

    // create new thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // update a thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            body,
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