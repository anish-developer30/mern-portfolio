const User = require("../models/user");
const Contact = require("../models/contact");
const Services = require("../models/services");

// get all user data
const AllUsers = async (req, res) => {
  try {
    const all_users = await User.find({}, { password: 0 });
    if (!all_users) {
      res.status(404).json({ message: "no data available" });
    }
    res.status(200).json(all_users);
  } catch (error) {
    next(error);
  }
};

// get admin update  user data
const GetUpData = async (req, res) => {
  try {
    const id = req.params.id;
    const upData = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).json(upData);
  } catch (error) {
    next(error);
  }
};

// update admin user data
const GetUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const upData = req.body;
    const updateData = await User.updateOne({ _id: id }, { $set: upData });
    res.status(200).json({
      message: "Data Updated successfully",
      updateData,
    });
  } catch (error) {
    next(error);
  }
};

// delete admin user
const DeleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// get all contact data
const Allcontacts = async (req, res) => {
  try {
    const all_contacts = await Contact.find();
    if (!all_contacts) {
      res.status(404).json({ message: "no data available" });
    }
    res.status(200).json(all_contacts);
  } catch (error) {
    next(error);
  }
};

// delete admin contact
const DeleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// get all services data
const GetServices = async (req, res) => {
  try {
    const serviceData = await Services.find();
    res.status(200).json(serviceData);
  } catch (error) {
    next(error);
  }
};

// delete admin contact
const DeleteService = async (req, res) => {
  try {
    const id = req.params.id;
    await Services.deleteOne({ _id: id });
    return res.status(200).json({ message: "service Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  AllUsers,
  Allcontacts,
  DeleteUser,
  GetUpData,
  GetUpdate,
  DeleteContact,
  GetServices,
  DeleteService,
};
