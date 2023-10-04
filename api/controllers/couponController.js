import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Coupon from "../models/Coupon.js";

/**
 * @DESC Get All coupon data
 * @ROUTE /api/v1/coupon/
 * @method GET
 * @access public
 */
export const getAllCoupon = asyncHandler(async (req, res) => {
  const coupons = await Coupon.find();
  if (!coupons) {
    return res.status(404).json({ message: "coupon data not found" });
  }

  return res.status(200).json({ coupons });
});
/**
 * @DESC Get Single coupon data
 * @ROUTE /api/v1/coupon/:id
 * @method GET
 * @access public
 */
export const getSingleCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const coupon = await Coupon.findById(id);

  if (!coupon) {
    return res.status(404).json({ message: "coupon data not found" });
  }

  res.status(200).json({ coupon });
});

/**
 * @DESC Create new coupon
 * @ROUTE /api/v1/coupon
 * @method POST
 * @access public
 */
export const createCoupon = asyncHandler(async (req, res) => {
  // get values
  const { name, expire, discount } = req.body;
  console.log(req.body);
  // validations
  if (!name || !expire || !discount) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // email check
  const nameCheck = await Coupon.findOne({ name });

  if (nameCheck) {
    return res.status(400).json({ message: "Coupon already exists" });
  }

  // create new product
  const coupon = await Coupon.create(req.body);

  res.status(200).json({ coupon, message: "coupon created successfully" });
});

/**
 * @DESC Update coupon
 * @ROUTE /api/v1/coupon/:id
 * @method GET
 * @access public
 */
export const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const coupon = await Coupon.findById(id);

  if (!coupon) {
    return res.status(404).json({ message: "coupon data not found" });
  }
  // update the coupon
  const updateCoupon = await Coupon.findByIdAndUpdate(coupon._id, req.body, {
    new: true,
  });

  return res
    .status(200)
    .json({ updateCoupon, message: "Coupon updated successfully" });
});
/**
 * @DESC delete coupon
 * @ROUTE /api/v1/coupon/:id
 * @method GET
 * @access public
 */
export const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const coupon = await Coupon.findById(id);

  if (!coupon) {
    return res.status(404).json({ message: "coupon data not found" });
  }

  // update the coupon
  const deleteCoupon = await Coupon.findByIdAndDelete(coupon._id);

  return res
    .status(200)
    .json({ deleteCoupon, message: "Coupon updated successfully" });
});
