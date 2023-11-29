const RepairsMotor = require("../repairs/repairs.model");

class RepairsMotorsServices {
  static async findAll() {
    return await RepairsMotor.findAll({
      where: {
        status: "pending",
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
        status: "pending",
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
