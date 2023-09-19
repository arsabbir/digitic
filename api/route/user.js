import express from "express";
import {
  addCartUser,
  applyCoupon,
  blockUser,
  createOrder,
  createUser,
  deleteUser,
  getAllCart,
  getAllOrders,
  getAllUser,
  getOrder,
  getOrderUserId,
  getSingleUser,
  getWishllist,
  removeCartUser,
  saveAddress,
  unblockUser,
  updateOrderStatus,
  updatePassword,
  updateUser,
} from "../controllers/userController.js";
import tokenVerify from "../middlewares/tokenVerify.js";
import { isAdmin } from "../middlewares/isAdmin.js";

// init router
const router = express.Router();

// use verify token
router.use(tokenVerify);
// route
router.route("/").get(getAllUser).post(createUser);
// get user wishlist
router.route("/wishlist").get(getWishllist);
// save address
router.route("/save-address").put(saveAddress).patch(saveAddress);
// add Cart and Delete Cart and Show All Cart
router.route("/cart").post(addCartUser).delete(removeCartUser).get(getAllCart);
// apply coupon
router.route("/applycoupon").post(applyCoupon);
// order create
router.route("/cart/cash-order").post(createOrder);
// all orders
router.route("/allorders").get(isAdmin, getAllOrders);
// get single user order
router.route("/getorder").get(getOrder);
// get order by user id only seen admin
router.route("/getorderuserid/:id").get(isAdmin, getOrderUserId);
// update order status
router.route("/order/update-order/:id").put(isAdmin, updateOrderStatus);

// user (single show,delete,update)
router
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser)
  .patch(updateUser);
// password(update,reset,forget)
router.route("/updatePassword/:id").put(updatePassword).patch(updatePassword);
router.route("/block/:id").get(isAdmin, blockUser);
router.route("/unblock/:id").get(isAdmin, unblockUser);

// export
export default router;
