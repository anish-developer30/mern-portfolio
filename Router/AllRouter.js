const express = require("express");
const AllControllers = require("../Controllers/controller");
const { RegisterSchema, LoginSchema } = require("../validators/validate");
const userMiddleware = require("../middlewares/user_data_mid");
const validate = require("../middlewares/check_value");

const router = express.Router();

// create root to visit user

// home path
router.route("/").get(AllControllers.Home);

// register path
router
  .route("/register")
  .post(validate(RegisterSchema), AllControllers.Regiter);

// login path
router.route("/login").post(validate(LoginSchema), AllControllers.Login);

// get user data path

router.route("/user").get(userMiddleware, AllControllers.UserData);

module.exports = router;
