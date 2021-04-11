/* models/Thought.js: define Thought schema */
const { Schema, model } = require("mongoose");
const ReactionSchema = require("./Reaction");

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
            get: value => new Intl
                .DateTimeFormat(
                    "en-US-u-hc-h12",
                    { dateStyle: "full", timeStyle: "medium" }
                )
                .format(value)
        },
        username: {
            type: String,
            required: "This thought must have an associated username."
        },
        reactions: [ReactionSchema]
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