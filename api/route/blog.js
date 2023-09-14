import express from "express";
import tokenVerify from "../middlewares/tokenVerify.js";
import {
  createBlog,
  deleteBlog,
  disLiketheBlog,
  getAllBlog,
  getSingleBlog,
  likeTheBlog,
} from "../controllers/blogController.js";

// init router
const router = express.Router();

// token verify
router.use(tokenVerify);
router.route("/").get(getAllBlog).post(createBlog);
router.route("/:id").get(getSingleBlog).delete(deleteBlog).put(updateBlog).patch(updateBlog);
router.route("/like").put(likeTheBlog).patch(likeTheBlog);
router.route("/dislike").put(disLiketheBlog).patch(disLiketheBlog);


// export
export default router;
