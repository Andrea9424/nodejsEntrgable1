const UsersMotor = require("../users/users.model");

class UserMotorsServices {
  static async findAll(data) {
    return await UsersMotor.findAll();
  }

  static async create(data) {
    return await UsersMotor.create(data);
  }

  static async findOne(id) {
    return await UsersMotor.findOne({
      where: {
        id: id,
      },
    });
  }

  static async update(user, data) {
    return await user.update(data);
  }

  static async delete(user) {
    return await user.update({
      status: false,
    });
  }
}

module.exports = UserMotorsServices;
