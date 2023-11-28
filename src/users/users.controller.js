const UserMotorsServices = require("../users/users.service");

const findAll = async (req, res) => {
  try {
    const UsersMotor = await UserMotorsServices.findAll();
    return res.status(200).json({
      UsersMotor,
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
    const user = await UserMotorsServices.findOne(id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found `,
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: " There was a mistake",
    });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password, rol } = req.body;
    const UsersMotor = await UserMotorsServices.create({
      name,
      email,
      password,
      rol,
    });

    return res.status(201).json({
      data: UsersMotor,
    });
  } catch (error) {
    return res.status(500).json({
      message: " There was a mistake",
    });
  }
};

const patch = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await UserMotorsServices.findOne(id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }
    const userUpdate = await UserMotorsServices.update(user, {
      name,
      email,
    });
    return res.status(200).json({
      userUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: " There was a mistake",
    });
  }
};

const delet = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserMotorsServices.findOne(id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }

    await UserMotorsServices.delete(user);
    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json({
      message: " There was a mistake",
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
