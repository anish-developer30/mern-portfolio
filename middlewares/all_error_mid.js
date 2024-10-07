const allerrormiddleware = (err, req, res, next) => {
  const status = err.status || 5000;
  const message = err.message || "server error";
  const extramessage = err.extramessage || "field error";
  return res.status(status).json({ message, extramessage });
};

module.exports = allerrormiddleware;
