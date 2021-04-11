/* routes/api/index.js: setup api routes and export to routes/index.js */
const router = require("express").Router();
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);

module.exports = router;
