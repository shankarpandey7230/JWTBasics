const CustomAPIError = require("./custom-error");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.status.code = 401;
  }
}

module.exports = UnauthenticatedError;
