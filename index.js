const express = require("express");
const cors = require("cors");

// require("./db_init");

const apiController = require("./controllers");
const app = express();
const DEV_PORT = 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiController);

app.use("*", (_, res) => {
  return res.status(404).json({
    isError: true,
    message: "(!)Not found, Please check request path",
  });
});

module.exports = app;
// app.listen(DEV_PORT, () => {
//   console.log(`Express Running on ${DEV_PORT}`);
// });
