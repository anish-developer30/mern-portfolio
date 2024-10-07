const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected...");
  } catch (error) {
    console.log("Not Connected... ", error);
  }
};

module.exports = DBConnect;
