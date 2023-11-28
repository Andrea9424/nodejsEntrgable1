const RepairsMotor = require("../repairs/repairs.model");

class RepairsMotorsServices {
  static async findAll(data) {
    return await RepairsMotor.findAll({
      where: {
        status: "pendig",
      },
    });
  }

  static async create(data) {
    return await RepairsMotor.create(data);
  }

  static async findOne(id) {
    return await RepairsMotor.findOne({
      where: {
        id: id,
        status: "pendig",
      },
    });
  }

  static async update(repair) {
    return await repair.update({
      status: "completed",
    });
  }

  static async delete(repair) {
    return await repair.update({
      status: "cancelled",
    });
  }
}

module.exports = RepairsMotorsServices;
