/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class Validator {
  validateUsrename(login) {
    return /^[a-zA-Z](?!.*[\d]{4})[a-zA-Z0-9_-]*[a-zA-Z]$/g.test(login);
  }
}
