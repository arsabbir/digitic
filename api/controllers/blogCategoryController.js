import asyncHandler from "express-async-handler";
import BlogCategory from "../models/BlogCategory.js";
import { createSlug } from "../helper/slug.js";

/**
 * @DESC Get all blogCategorys data
 * @ROUTE /api/v1/blogCategory
 * @method GET
 * @access public
 */

export const getAllBlogCategory = asyncHandler(async (req, res) => {
  
  const blogCategories = await BlogCategory.find();
  if (blogCategories.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }
  return res.status(200).json({ blogCategories });
});

/**
 * @DESC Get Single blogCategorys data
 * @ROUTE /api/v1/blogCategory/:id
 * @method GET
 * @access public
 */
export const getSingleBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blogCategory = await BlogCategory.findById(id);

  if (!blogCategory) {
    return res.status(404).json({ message: "BlogCategory data not found" });
  }

  res.status(200).json(blogCategory);
});

/**
 * @DESC Create new BlogCategory
 * @ROUTE /api/v1/blogCategory
 * @method POST
 * @access public
 */
export const createBlogCategory = asyncHandler(async (req, res) => {
  // get values
  const { name } = req.body;

  // validations
  if (!name) {
    return res.status(400).json({ message: "blogCategory name is required" });
  }
  // email check
  const nameCheck = await BlogCategory.findOne({ name });

  if (nameCheck) {
    return res.status(400).json({ message: "BlogCategory already exists" });
  }

  // create new blogCategory
  const blogCategory = await BlogCategory.create({
    name,
    slug: createSlug(name),
  });

  res
    .status(200)
    .json({ blogCategory, message: "blogCategory created successfully" });
});

/**
 * @DESC Delete BlogCategory
 * @ROUTE /api/v1/blogCategory/:id
 * @method DELETE
 * @access public
 */
export const deleteBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blogCategory = await BlogCategory.findById(id);
  if (!blogCategory) {
    return res.status(200).json({ message: "blogCategory not found" });
  }
  const blogCategoryDelete = await BlogCategory.findByIdAndDelete(id);

  res.status(200).json({ message: "blogCategory deleted" });
});

/**
 * @DESC Update BlogCategory
 * @ROUTE /api/v1/blogCategory/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateBlogCategory = asyncHandler(async (req, res) => {
  console.log("UpdateBC");
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "BlogCategory name is required" });
  }

  const blogCategory = await BlogCategory.findById(id);

  if (!blogCategory) {
    return res.status(404).json({ message: "BlogCategory data not found" });
  }

  if (blogCategory) {
    // Update the blogCategory's name and slug
    const UpBlogCate = await BlogCategory.findByIdAndUpdate(
      blogCategory._id,
      {
        name: name,
        slug: createSlug(name),
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ UpBlogCate, message: "BlogCategory data updated successfully" });
  }
});
