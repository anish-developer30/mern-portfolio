const Service = require("../models/services");
const Services = async (req, res) => {
  try {
    const response = await Service.find();

    return res.status(201).json({ msg: response });
  } catch (error) {
    return res.status(400).json({ msg: "services error", error });
  }
};

module.exports = Services;
