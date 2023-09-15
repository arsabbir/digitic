// import section
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt, { compare } from "bcrypt";

/**
 * @DESC Get all users data
 * @ROUTE /api/v1/user
 * @method GET
 * @access public
 */

export const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find().populate("wishlist");
  if (users.length === 0) {
    return res.status(400).json({ message: "User not found" });
  }
  return res.status(400).json(users);
});

/**
 * @DESC Get Single users data
 * @ROUTE /api/v1/user/:id
 * @method GET
 * @access public
 */

export const getSingleUser = asyncHandler(async (req, res) => {
  // get value from params
  const id = req.params.id;

  const user = await User.findById(id).populate("wishlist");

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  return res.status(200).json(user);
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */

export const createUser = asyncHandler(async (req, res) => {
  // get value from body
  const userData = req.body;
  const { name, email, password } = userData;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // email checked
  const emailCheck = await User.findOne({ email });
  if (emailCheck) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // hash password
  const hashPassword = await bcrypt.hash(password, 10);

  userData.password = hashPassword;

  // create a new user
  const user = await User.create(userData);
  return res.status(200).json({ user, message: "User create successfull" });
});

/**
 * @DESC Delete User
 * @ROUTE /api/v1/user/:id
 * @method DELETE
 * @access public
 */

export const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdDelete(id);
  res.status(200).json({ user, message: "User delete successfull" });
});

/**
 * @DESC Update User
 * @ROUTE /api/v1/user/:id
 * @method PUT/PATCH
 * @access public
 */

export const updateUser = asyncHandler(async (req, res) => {
  // get value
  const { id } = req.params;
  const userData = req.body;
  const { name, email, mobile, gender } = userData;

  //   validation
  if (!name || !email || !gender) {
    res.status(200).json({ message: "All fields are required" });
  }
  //   update user
  const user = await User.findByIdAndUpdate(id, userData, { new: true });

  //   response
  res.status(200).json({ user, message: ` ${name}your data has been updated` });
});

/**
 * @DESC Update User password
 * @ROUTE /api/v1/user/updatePassword/id
 * @method PUT/PATCH
 * @access public
 */

export const updatePassword = asyncHandler(async (req, res) => {
  // get value
  const { _id } = req.me;
  const { oldPassword, newPassword, confirmPassword } = req.body;

  if (!oldPassword || !confirmPassword || !newPassword) {
    res.status(400).json({ message: ` All fields are required` });
  }

  //  check user
  const userData = await User.findById(_id);

  if (userData) {
    if (newPassword !== confirmPassword) {
      res
        .status(400)
        .json({ message: ` New password and Old Password are not equel` });
    }
    // match old Password
    const matchPass = await bcrypt.compare(oldPassword, userData.password);

    if (matchPass == false) {
      res.status(200).json({ message: ` Old password not match` });
    }
    if (matchPass == true) {
      const updatePass = await bcrypt.hash(confirmPassword, 10);
      userData.password = updatePass;
      const updateUser = await User.findByIdAndUpdate(userData._id, userData);
    }
  }

  res.status(200).json({ userData, message: ` Password update successfull` });
});

/**
 * @DESC block User
 * @ROUTE api/v1/user/:id
 * @METHOD Get
 * @ACCESS public
 */
export const blockUser = asyncHandler(async (req, res) => {
  //get value from params
  const { id } = req.params;
  //check user
  const user = await User.findById(id);
  //not found user
  if (!user) {
    res.status(400).json({ message: "user not found" });
  }
  //update block user
  const blockUser = await User.findByIdAndUpdate(
    id,
    {
      isBlocked: true,
    },
    {
      new: true,
    }
  );

  res.status(200).json({ message: "user is Block!" });
});

/**
 * @DESC unblock User
 * @ROUTE api/v1/user/:id
 * @METHOD Get
 * @ACCESS public
 */

export const unblockUser = asyncHandler(async (req, res) => {
  //get value from params
  const { id } = req.params;
  //check user
  const user = await User.findById(id);
  if (!user) {
    res.status(400).json({ message: "user not found" });
  }
  //update unblock user
  await User.findByIdAndUpdate(
    id,
    {
      isBlocked: false,
    },
    {
      new: true,
    }
  );

  res.status(200).json({ message: "user is unblock!" });
});
