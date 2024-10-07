const validate = (scheme) => async (req, res, next) => {
  try {
    const parseBody = await scheme.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "field validation";
    const extramessage = err.errors[0].message;

    const error = {
      status,
      message,
      extramessage,
    };
    next(error);
  }
};

module.exports = validate;
