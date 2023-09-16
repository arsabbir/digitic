import express from "express";
import {
  addCartUser,
  applyCoupon,
  blockUser,
  createUser,
  deleteUser,
  getAllCart,
  getAllUser,
  getSingleUser,
  getWishllist,
  removeCartUser,
  saveAddress,
  unblockUser,
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
