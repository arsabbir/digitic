import express from "express";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupon,
  getSingleCoupon,
  updateCoupon,
} from "../controllers/couponController.js";
import tokenVerify from "../middlewares/tokenVerify.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// Routes for managing poupons
router.route("/").get(getAllCoupon).post(isAdmin, createCoupon);

// routes for managing the single poupon(update,delete,show)
router
  .route("/:id")
  .get(getSingleCoupon)
  .delete(isAdmin, deleteCoupon)
  .put(isAdmin, updateCoupon)
  .patch(isAdmin, updateCoupon);

// export default router
export default router;
