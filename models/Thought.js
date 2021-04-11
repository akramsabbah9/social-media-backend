/* models/Thought.js: define Thought schema */
const { Schema, model } = require("mongoose");

// TODO: complete thought schema
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "This thought must have text.",
            maxLength: [280, "This thought is too long!"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: value => new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(value)
        },
        username: {
            type: String,
            required: "This thought must have an associated username."
        },
        reactions: [] //TODO: reference ReactionSchema
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;