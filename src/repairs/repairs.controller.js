const RepairsMotorsServices = require("../repairs/repairs.service");

const findAll = async (req, res) => {
  try {
    const RepairsMotor = await RepairsMotorsServices.findAll();
    return res.status(200).json({
      RepairsMotor,
    });
  } catch (error) {
    return res.status(500).json({
      message: " There was a mistake",
    });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await RepairsMotorsServices.findOne(id);
    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `repair with id: ${id} not found `,
      });
    }

    return res.status(200).json({
      repair,
    });
  } catch (error) {
    return res.status(500).json({
      message: " There was a mistake",
    });
  }
};

const create = async (req, res) => {
  try {
    const { date, userId } = req.body;
    const RepairsMotor = await RepairsMotorsServices.create({
      date,
      userId,
    });

    return res.status(201).json({ RepairsMotor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: " There was a mistake",
    });
  }
};

const patch = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, status } = req.body;
    const repair = await RepairsMotorsServices.findOne(id);
    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `repairs with id: ${id} not found`,
      });
    }
    const repairUpdate = await RepairsMotorsServices.update(repair, {
      date,
      status,
    });
    return res.status(200).json({
      repairUpdate,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: " There was a mistake",
    });
  }
};

const delet = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await RepairsMotorsServices.findOne(id);
    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `repairs with id: ${id} not found`,
      });
    }

    await RepairsMotorsServices.delete(repair);
    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json({
      message: " There was a mistake",
      error,
    });
  }
};
module.exports = {
  findAll,
  create,
  findOne,
  patch,
  delet,
};
