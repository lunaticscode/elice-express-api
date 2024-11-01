const signinValidator = require("../middlewares/signinValidator");
const userController = require("./user.controller");

const apiController = require("express").Router();

apiController.get("/test", (_, res) => {
  return res.json({ isError: false, message: "Success to API test." });
});

// [TODO] :: 추후 user.controller.js 로 이동
apiController.post("/signin", signinValidator, (req, res) => {
  const { email, password } = req.body;
  const userData = getUser(email, password);
  if (userData) {
    return res
      .status(200)
      .json({ isError: false, data: userData, message: "Login Success" });
  }

  return res.status(400).json({
    isError: true,
    message: `(!) Cannot find User, Please Check your email, password.`,
  });
});

apiController.use("/users", userController);

module.exports = apiController;
