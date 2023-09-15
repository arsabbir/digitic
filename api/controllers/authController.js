// import section
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sentMail } from "../utils/mail.js";
import randomstring from "randomstring";

/**
 * @DESC Register User
 * @ROUTE /api/v1/auth/register
 * @method POST
 * @access public
 */

export const register = asyncHandler(async (req, res) => {
  // get value
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All field are required" });
  }

  // email check
  const emailCheck = await User.findOne({ email });

  if (emailCheck) {
    return res.status(400).json({ message: "Email Already  Exists" });
  }

  // hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  //   create a new user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  console.log(user);
  return res.status(200).json({ user, message: "User Create Successfull" });
});

/**
 * @DESC Login User
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */

export const login = asyncHandler(async (req, res) => {
  // get value from body
  const { email, password } = req.body;

  // vallidation
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // find login user
  const loginUser = await User.findOne({ email });


  // user not found
  if (!loginUser) {
    return res.status(400).json({ message: "Not Found User" });
  }

  //   password check
  const passwordCheck = await bcrypt.compare(password, loginUser.password);
  if (!passwordCheck) {
    return res.status(400).json({ message: "Wrong Password" });
  }

  //   crate acess token
  const token = jwt.sign(
    { email: loginUser.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
  );

  //   set token cookie
  res.cookie("accessToken", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
  });

  return res
    .status(200)
    .json({ token, user: loginUser, message: "Login Successfull" });
});

/**
 * @DESC Logout User
 * @ROUTE /api/v1/auth/logout
 * @method POST
 * @access public
 */

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  return res.status(200).json({ message: "Logout successfull" });
});

/**
 * @DESC Forget Password
 * @ROUTE /api/v1/auth/forget-password
 * @method POST
 * @access public
 */

export const forgetPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  //   crate acess token
  // const token = jwt.sign(
  //   { email: user.email },
  //   process.env.ACCESS_TOKEN_SECRET,
  //   { expiresIn: 30 * 60 * 1000 }
  // );
  const ranStr = randomstring.generate(7);

  const Link = `http://localhost:5050/api/v1/auth/reset-password/${ranStr}`;
  sentMail({
    subject: "Reset Password",
    to: user.email,
    msg: "Your password has been reset",
    Link,
  });
  const updateUserToken = await User.findByIdAndUpdate(
    user._id,
    { token: ranStr },
    { new: true }
  );
  // console.log(updateUserToken);
  return res.status(200).json({
    updateUserToken,
    message: "Sent email,Please check your email inbox",
  });
});

/**
 * @DESC Reset Password
 * @ROUTE /api/v1/auth/reset-password
 * @method POST
 * @access public
 */

export const resetPassword = asyncHandler(async (req, res) => {
  // get value
  const token = req.params;
  const { newPassword } = req.body;

  // user
  const user = await User.findOne(token);

  // hash password
  const hashPass = await bcrypt.hash(newPassword, 10);

  // reset password
  await User.findByIdAndUpdate(
    user._id,
    { password: hashPass, token: null },
    { new: true }
  );

  // response
  return res.status(200).json({ user, message: "Password reset Successfull" });
});
