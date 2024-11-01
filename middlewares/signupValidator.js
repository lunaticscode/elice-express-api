const {
  isValidEmail,
  isValidName,
  isValidPassword,
} = require("../utils/validate");

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {import("express").NextFunction} next
 */
const signupValidator = (req, res, next) => {
  console.log("\nsignupValidator", req.body);

  const { email = "", name = "", password = "" } = req.body;
  if (
    !email ||
    !name ||
    !password ||
    !isValidEmail(email) ||
    !isValidName(name) ||
    !isValidPassword(password)
  ) {
    return res.status(400).json({
      isError: true,
      message: "(!) Invalid signup data, Please check your request body.",
    });
  }
  next();
};
module.exports = signupValidator;
