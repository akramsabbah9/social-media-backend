/* models/User.js: define User schema */
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "A username must be provided.",
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: "An email must be provided.",
            matches: [
                /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/,
                "This is not a valid email address."
            ]
        },
        //thoughts, // TODO: [{type: Schema.Types.ObjectId, ref: "Thought"}]
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User" // self-reference
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;