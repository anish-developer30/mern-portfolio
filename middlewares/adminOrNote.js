const AdminOrNote = async (req, res, next) => {
  try {
    const admin_or_not = req.user.isAdmin;
    if (!admin_or_not) {
      res
        .status(400)
        .json({ msg: "access denite ! becouse you are not admin " });
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: "you are not admin " });
  }
};

module.exports = AdminOrNote;
