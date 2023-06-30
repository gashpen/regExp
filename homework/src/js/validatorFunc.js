/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class Validator {
  validateUsrename(login) {
    return /(?<=^[\D-]+)[\d{3}]/g.test(login);
  }
}
