import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "User created Successfully", newUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "Users Fetch Successfully", users);
  } catch (error) {
    next(error);
  }
};
export const getUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await getUserByIdService(id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User is fetch successfully", user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUserService(id, name, email);
    if (!updatedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User is updated successfully", updatedUser);
  } catch (error) {}
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedUser = await deleteUserService(id);
    if (!deletedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User is deleted successfully", deletedUser);
  } catch (error) {
    next(error);
  }
};
