import express from "express";

import {
  createProCategory,
  deleteProCategory,
  getAllProCategory,
  getSingleProCategory,
  updateProCategory,
} from "../controllers/proCategoryController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllProCategory).post(createProCategory);
router
  .route("/:id")
  .put(updateProCategory)
  .patch(updateProCategory)
  .get(getSingleProCategory)
  .delete(deleteProCategory);

// export default router
export default router;
