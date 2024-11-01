/**
 *
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
  return email.includes("@");
};

/**
 *
 * @param {string} name
 * @returns {boolean}
 */
const isValidName = (name) => {
  return name.length >= 2;
};
const PASSWORD_REGEX =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~\-]).{8,}$/;

/**
 *
 * @param {string} password
 * @returns {boolean}
 */
const isValidPassword = (password) => {
  return PASSWORD_REGEX.test(password);
};

module.exports = {
  isValidateSigninValues,
  isValidEmail,
  isValidName,
  isValidPassword,
};

/**
 *
 * @param {string} email
 * @param {string} password
 */
const isValidateSigninValues = (email, password) => {
  try {
    if (
      !email ||
      !password ||
      !email.includes("@") ||
      !isValidPassword(password)
    ) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};
