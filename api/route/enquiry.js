import express from "express";

import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiry,
  getSingleEnquiry,
  updateEnquiry,
  updateEnquiryStatus,
} from "../controllers/enquiryController.js";
import tokenVerify from "../middlewares/tokenVerify.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllEnquiry).post(createEnquiry);
router
  .route("/:id")
  .get(getSingleEnquiry)
  .delete(isAdmin, deleteEnquiry)
  .put(isAdmin, updateEnquiry)
  .patch(isAdmin, updateEnquiry);
router
  .route("/status/:id")
  .patch(isAdmin, updateEnquiryStatus)
  .put(isAdmin, updateEnquiryStatus);
// export default router
export default router;
