const CustomAPIError = require("./custom-error");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.status.code = 400;
  }
}

module.exports = BadRequest;
