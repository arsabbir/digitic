import express from "express";
import tokenVerify from "../middlewares/tokenVerify.js";
import {
  createBlog,
  deleteBlog,
  disLiketheBlog,
  getAllBlog,
  getSingleBlog,
  likeTheBlog,
  updateBlog,
} from "../controllers/blogController.js";

// init router
const router = express.Router();

// token verify
router.use(tokenVerify);

// routes 
router.route("/").get(getAllBlog).post(createBlog);
router.route("/like").put(likeTheBlog).patch(likeTheBlog);
router.route("/:id").get(getSingleBlog).delete(deleteBlog).put(updateBlog).patch(updateBlog);
router.route("/dislike").put(disLiketheBlog).patch(disLiketheBlog);


// export
export default router;
