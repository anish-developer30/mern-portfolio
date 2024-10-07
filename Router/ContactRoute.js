const express = require("express");
const ContactForm = require("../Controllers/contact_contro");
const router = express.Router();

// contact path
router.route("/contact").post(ContactForm);

module.exports = router;
