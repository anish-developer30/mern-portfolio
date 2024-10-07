const express = require("express");
const Services = require("../Controllers/service_contro");
const router = express.Router();

// contact path
router.route("/service").get(Services);

module.exports = router;
