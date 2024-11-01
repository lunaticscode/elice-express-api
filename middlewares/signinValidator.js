const { isValidateSigninValues } = require("../utils/validate");

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {import("express").NextFunction} next
 */
const signinValidator = (req, res, next) => {
  const { email, password } = req.body;
  if (isValidateSigninValues(email, password)) {
    next();
    return;
  }
  return res.status(400).json({
    isError: true,
    message: "(!) Invalid SigninForm, Please Check SigninValues",
  });
};

module.exports = signinValidator;
