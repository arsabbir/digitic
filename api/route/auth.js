import express from "express";
import {
  forgetPassword,
  login,
  logout,
  register,
  resetPassword,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

// init router
const router = express.Router();

// create routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(tokenVerify, logout);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password/:token").post(resetPassword);

export default router;
