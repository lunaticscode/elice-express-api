const dummyUsers = require("../consts/dummyUser");
const EliceUserModel = require("../models/user.model");

/**
 *
 * @param {string} email
 */
const getUserByEmail = async (email) => {
  if (!email) return false;
  try {
    const user = await EliceUserModel.find({ email });
    return user;
  } catch (err) {
    console.log(err);
    return false;
  }
};

/**
 *
 * @param {string} email
 * @param {string} password
 */
const getUser = (userEmail, userPassword) => {
  console.log({ userEmail, userPassword });
  const user = dummyUsers.find(
    ({ email, password }) => email === userEmail && password === userPassword
  );
  if (user) {
    return user;
  }
  return null;
};

const insertUser = async ({ email, name, password }) => {
  console.log({ email, name, password });
  try {
    await EliceUserModel.create({ email, name, password });
    return true;
  } catch (err) {
    console.log({ err });
    return false;
  }
};

module.exports = {
  getUser,
  insertUser,
  getUserByEmail,
};
