/* models/index.js: package models in an object and export to controllers */
const User = require("./User");
const Thought = require("./Thought");

module.exports = { User, Thought };