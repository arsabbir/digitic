import express from "express";

import {
  createBlogCategory,
  deleteBlogCategory,
  getAllBlogCategory,
  getSingleBlogCategory,
  updateBlogCategory,
} from "../controllers/blogCategoryController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllBlogCategory).post(createBlogCategory);
router
  .route("/:id")
  .get(getSingleBlogCategory)
  .delete(deleteBlogCategory)
  .put(updateBlogCategory)
  .patch(updateBlogCategory);

// export default router
export default router;
