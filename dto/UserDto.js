class UserDto {
  constructor({ id, first_name, last_name, username }) {
    this._id = id;
    this._first_name = first_name;
    this._last_name = last_name;
    this._username = username;
  }

  get id() {
    return this._id;
  }

  get first_name() {
    return this._first_name;
  }

  get last_name() {
    return this._last_name;
  }

  get username() {
    return this._username;
  }

  static fromUserEntity(userEntity) {
    return new UserDto({
      id: userEntity.id,
      first_name: userEntity.first_name,
      last_name: userEntity.last_name,
      username: userEntity.username,
    });
  }

  toPlainObject() {
    return {
      id: this._id,
      first_name: this._first_name,
      last_name: this._last_name,
      username: this._username,
    };
  }
}

module.exports = UserDto;
