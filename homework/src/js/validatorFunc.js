/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
export default class Validator {
  validateUsername(login) {
    if (/^[a-zA-Z](?!.*[\d]{4})[a-zA-Z0-9_-]*[a-zA-Z]$/g.test(login)) {
      return true;
    }
    return false;
  }
}
