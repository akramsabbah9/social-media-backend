/* server.js: start server */
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");

// configure app
const app = express();
const PORT = process.env.PORT || 3001;

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries
mongoose.set("debug", true);

// start server
app.listen(PORT, () => console.log(`Started server on localhost:${PORT}.`));
