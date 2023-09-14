import express from "express";
import {
  blockUser,
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
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
router
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser)
  .patch(updateUser);
router.route("/updatePassword/:id").put(updatePassword).patch(updatePassword);
router.route("/block/:id").get(isAdmin, blockUser);
router.route("/unblock/:id").get(isAdmin, unblockUser);

// export
export default router;
