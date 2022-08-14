const AplicationError = require('./500error');

class BadRequestError extends AplicationError {
  constructor() {
    super(400, '400 — переданы некорректные данные в методы создания карточки, пользователя, обновления аватара пользователя или профиля');
  }
}

module.exports = BadRequestError;
