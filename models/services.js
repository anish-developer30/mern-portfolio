const mongoose = require("mongoose");

const ServiceScheme = mongoose.Schema({
  price: {
    type: String,
    require: true,
  },
  provider: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});

const Service = new mongoose.model("Service", ServiceScheme);

module.exports = Service;
