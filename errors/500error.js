class AplicationError extends Error {
  constructor(status = 500, message = ' На сервере произошла ошибка ') {
    super();
    this.status = status;
    this.message = message;
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AplicationError;
