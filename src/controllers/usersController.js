import User from "../models/user";
import ApiError from "../error/ApiError";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json(user);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { name, lastName, username } = req.body;

    const candidate = await User.findOne({ username });
    if (candidate)
      return res
        .status(400)
        .json({ message: `User with username ${username} already exist` });

    const user = await User.create({ name, lastName, username });
    return res.json(user);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, lastName, username } = req.body;
    const user = await User.findByIdAndUpdate(id, { name, lastName, username });
    return res.json(user);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.deleteOne({ _id: id });
    return res.json(user);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};
