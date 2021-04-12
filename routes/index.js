/* routes/index.js: setup routes and export to server.js */
const router = require("express").Router();
const apiRoutes = require("./api");

// use api routes
router.use("/api", apiRoutes);

// send 404 for all invalid routes
router.use((req, res) => res.status(404).send("<h1>Not Found</h1>"));

module.exports = router;
