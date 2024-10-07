const User = require("../models/user");
const bcrypt = require("bcryptjs");

// home page code
const Home = (req, res) => {
  try {
    res.status(200).send("Home Page");
  } catch (error) {
    console.log(error);
  }
};

// register page code
const Regiter = async (req, res) => {
  try {
    const { username, email, password, phone, isAdmin } = req.body;
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(400).json({ message: "Email is already exist" });
    }
    const data = await User.create({
      username,
      email,
      password,
      phone,
      isAdmin,
    });

    if (data) {
      res.status(200).json({
        msg: "register successfull",
        token: await data.generateToken(),
        userId: data._id.toString(),
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "server error" });
  }
};

// login page code
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email: email });

    if (!emailExist) {
      return res.status(400).json({ message: "invalid login " });
    }
    const user = await bcrypt.compare(password, emailExist.password);

    if (user) {
      res.status(200).json({
        msg: "login successfull",
        token: await emailExist.generateToken(),
        userId: emailExist._id.toString(),
      });
    } else {
      res.status(400).json({ msg: "invalid login details" });
    }
  } catch (error) {
    console.log(error);
  }
};

// user page code
const UserData = async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json({ userData });
  } catch (error) {
    console.log("error user controller", error);
  }
};

module.exports = { Home, Regiter, Login, UserData };
