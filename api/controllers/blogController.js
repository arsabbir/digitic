import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";

/**
 * @DESC Create Blog
 * @ROUTE /api/v1/blog/
 * @method POST
 * @access public
 */

export const createBlog = asyncHandler(async (req, res) => {
  const { title, category, description } = req.body;
  console.log(req.body.photos);
  // validation
  if (!title || !category || !description) {
    return res.status(400).json({ user, message: "All fields are required" });
  }

  // blog create
  const newBlog = await Blog.create(req.body);

  // response
  return res.status(200).json({ newBlog, message: "Blog post successfull" });
});

/**
 * @DESC get all Blog
 * @ROUTE /api/v1/blog/
 * @method POST
 * @access public
 */

export const getAllBlog = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  return res.status(200).json({ blogs, message: "All blog show" });
});

/**
 * @DESC GEt Single Blog
 * @ROUTE /api/v1/blog/id
 * @method get
 * @access public
 */

export const getSingleBlog = asyncHandler(async (req, res) => {
  // get value
  const { id } = req.params;
  console.log("getSingleBlog");
  //   check blog in database
  const getBlog = await Blog.findById(id)
    .populate("likes")
    .populate("dislikes");

  // update views
  const updateView = await Blog.findByIdAndUpdate(id, {
    $inc: {
      numViews: 1,
    },
  });

  //   respnse
  return res.status(200).json({ getBlog, message: "Get Single Blog Show" });
});

/**
 * @DESC Delete blog
 * @ROUTE /api/v1/blog/id
 * @method Delete
 * @access public
 */

export const deleteBlog = asyncHandler(async (req, res) => {
  // get value
  const { id } = req.params;
  // check user
  const blog = await Blog.findByIdAndDelete(id);

  if (!blog) {
    return res.status(400).json({ message: "Data Not found" });
  }
  return res.status(200).json({ blog, message: "Blog Deleted" });
});

/**
 * @DESC Update blog
 * @ROUTE /api/v1/blog/id
 * @method PUT/PATCH
 * @access public
 */
export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, category, description } = req.body;

  // validation
  if (!title || !category || !description) {
    return res.status(400).json({ user, message: "All fields are required" });
  }
  const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.status(200).json({ updateBlog, message: "Blog Updated" });
});
/**
 * @DESC Like the Blog
 * @ROUTE /api/v1/blog/like
 * @method PUT
 * @access public
 */

export const likeTheBlog = asyncHandler(async (req, res) => {
  // Get the blogId from the request body
  const { blogId } = req.body;

  // Find the blog by its ID
  const blog = await Blog.findById(blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  // Get the login user's ID from req.me
  const loginUserId = req.me._id;

  // Check if the user has already disliked the blog
  const alreadyDisliked = blog.dislikes.includes(loginUserId);

  if (alreadyDisliked) {
    console.log("1");
    // Withdraw dislike
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );

    return res.status(200).json({ blog, message: "Withdraw dislike" });
  }

  // Check if the user has already liked the blog
  const alreadyLiked = blog?.likes?.includes(loginUserId);
  console.log(loginUserId);
  console.log(alreadyLiked);

  if (alreadyLiked) {
    // Withdraw like
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );

    return res.status(200).json({ blog, message: "Withdraw like" });
  }
  if (!alreadyLiked) {
    // Like the blog
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );

    return res.status(200).json({ blog, message: "Like this blog" });
  }
});

/**
 * @DESC Dislike the Blog
 * @ROUTE /api/v1/blog/dislike
 * @method PUT
 * @access public
 */

export const disLiketheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;

  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  // Find the login user's ID
  const loginUserId = req.me._id;

  // Check if the user has already liked the blog
  const alreadyLiked = blog?.likes?.includes(loginUserId);

  if (alreadyLiked) {
    console.log("1");
    // Withdraw like
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );

    return res.json({ blog, message: "Withdraw like" });
  }

  // Check if the user has already disliked the blog
  const alreadyDisLiked = blog?.dislikes.includes(loginUserId);

  if (alreadyDisLiked) {
    // Withdraw dislike
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );

    return res.json({ blog, message: "Withdraw dislike" });
  } else {
    // Dislike the blog
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );

    return res.json({ blog, message: "Dislike this blog" });
  }
});
