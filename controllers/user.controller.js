const userController = require("express").Router();
const crypto = require("crypto");

const { insertUser } = require("../services/user.service");
const signupValidator = require("../middlewares/signupValidator");

userController.post("/", signupValidator, async (req, res) => {
  const { email, name, password } = req.body;
  const isExistEmail = await getUserByEmail(email);

  if (isExistEmail) {
    return res.status(409).json({
      isError: true,
      message: "(!) Already exist email, Please check email",
    });
  }

  const hashedPassword = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");

  try {
    const createResult = await insertUser({
      email,
      name,
      password: hashedPassword,
    });
    if (createResult) {
      return res
        .status(201)
        .json({ isError: false, message: "Success to create user." });
    }
    return res.status(500).json({
      isError: true,
      message: "(!) Fail to create user, Please contact to admin.",
    });
  } catch (err) {
    console.log({ err });
    return res.status(500).json({
      isError: true,
      message: "(!) Fail to create user, Please contact to admin.",
    });
  }
});

module.exports = userController;
