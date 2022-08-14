const AplicationError = require('./500error');

class NotFoundError extends AplicationError {
  constructor() {
    super(404, '404 — карточка или пользователь не найден');
  }
}

module.exports = NotFoundError;
