/* models/Reaction.js: define Reaction schema to be used in Thought.js */
const { Schema, Types } = require("mongoose");

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: "This reaction must have a body.",
            maxLength: [280, "This reaction is too long!"]
        },
        username: {
            type: String,
            required: "This reaction must have an associated username."
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
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = ReactionSchema;