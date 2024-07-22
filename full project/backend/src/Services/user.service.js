const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwtProvider = "../config/jwtProvider.js";

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExit = await User.findOne({ email });

    if (isUserExit) {
      throw new Error("User already exits with email", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, email, password });

    console.log("Created user:", user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address");
    if (!user) {
      throw new Error("User not found With id: ", user);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (userId) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found With id: ", user);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserProfileByToken(token);

    const user = await findUserById(userId);

    if (!user) {
      throw new Error("User not found with this Id: ", userId);
    }
    console.log("user");
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createUser, findUserById, getUserByEmail,getUserProfileByToken,getAllUsers };
