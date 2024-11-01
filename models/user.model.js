const Mongoose = require("../db_init");
const { String } = Mongoose.Schema.Types;
const eliceUserSchema = new Mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const EliceUserModel = Mongoose.model("EliceUser", eliceUserSchema);
module.exports = EliceUserModel;
