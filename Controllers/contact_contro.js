const Contact = require("../models/contact");
const ContactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(201).json({ message: "Data inserted" });
  } catch (error) {
    return res.status(400).json({ msg: "contact error", error });
  }
};

module.exports = ContactForm;
