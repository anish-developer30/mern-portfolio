const express = require("express");
const {
  AllUsers,
  Allcontacts,
  DeleteUser,
  GetUpData,
  GetUpdate,
  DeleteContact,
  GetServices,
  DeleteService,
} = require("../Controllers/admin_contro");
const router = express.Router();

const userMiddleware = require("../middlewares/user_data_mid");
const AdminOrNote = require("../middlewares/adminOrNote");

// get users data path
router.route("/users").get(userMiddleware, AdminOrNote, AllUsers);

// get users data path for update
router.route("/users/:id").get(userMiddleware, AdminOrNote, GetUpData);

// update admin user data
router.route("/users/update/:id").patch(userMiddleware, AdminOrNote, GetUpdate);

// delete user data
router
  .route("/users/delete/:id")
  .delete(userMiddleware, AdminOrNote, DeleteUser);

// get contact data path
router.route("/contacts").get(userMiddleware, AdminOrNote, Allcontacts);

// delete admin contact data
router
  .route("/contacts/delete/:id")
  .delete(userMiddleware, AdminOrNote, DeleteContact);

// get all services data
router.route("/service").get(userMiddleware, AdminOrNote, GetServices);

// delete admin service data
router
  .route("/service/delete/:id")
  .delete(userMiddleware, AdminOrNote, DeleteService);

module.exports = router;
