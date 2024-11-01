const userController = require("./user.controller");

const apiController = require("express").Router();

apiController.get("/test", (_, res) => {
  return res.json({ isError: false, message: "Success to API test." });
});

apiController.use("/users", userController);

module.exports = apiController;
