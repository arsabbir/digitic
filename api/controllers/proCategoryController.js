import asyncHandler from "express-async-handler";
import ProCategory from "../models/ProCategory.js";
import { createSlug } from "../helper/slug.js";

/**
 * @DESC Get all proCategorys data
 * @ROUTE /api/v1/proCategory
 * @method GET
 * @access public
 */

export const getAllProCategory = asyncHandler(async (req, res) => {
  const proCategories = await ProCategory.find();

  if (proCategories.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }
  return res.status(200).json({ proCategories });
});

/**
 * @DESC Get Single proCategorys data
 * @ROUTE /api/v1/proCategory/:id
 * @method GET
 * @access public
 */
export const getSingleProCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const proCategory = await ProCategory.findById(id);

  if (!proCategory) {
    return res.status(404).json({ message: "ProCategory data not found" });
  }

  res.status(200).json(proCategory);
});

/**
 * @DESC Create new ProCategory
 * @ROUTE /api/v1/proCategory
 * @method POST
 * @access public
 */
export const createProCategory = asyncHandler(async (req, res) => {
  // get values
  const { name } = req.body;

  // validations
  if (!name) {
    return res.status(400).json({ message: "proCategory name is required" });
  }
  // email check
  const nameCheck = await ProCategory.findOne({ name });

  if (nameCheck) {
    return res.status(400).json({ message: "ProCategory already exists" });
  }

  // create new proCategory
  const proCategory = await ProCategory.create({
    name,
    slug: createSlug(name),
  });

  res
    .status(200)
    .json({ proCategory, message: "proCategory created successfully" });
});

/**
 * @DESC Delete ProCategory
 * @ROUTE /api/v1/proCategory/:id
 * @method DELETE
 * @access public
 */
export const deleteProCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const proCategory = await ProCategory.findById(id);
  if (!proCategory) {
    return res.status(200).json({ message: "proCategory not found" });
  }
  const proCategoryDelete = await ProCategory.findByIdAndDelete(id);

  res.status(200).json({ message: "proCategory deleted" });
});

/**
 * @DESC Update ProCategory
 * @ROUTE /api/v1/proCategory/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateProCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "ProCategory name is required" });
  }

  const proCategory = await ProCategory.findById(id);
  if (!proCategory) {
    return res.status(404).json({ message: "ProCategory data not found" });
  }
  if (proCategory) {
    // Update the blogCategory's name and slug
    const UpProCate = await ProCategory.findByIdAndUpdate(
      proCategory._id,
      {
        name: name,
        slug: createSlug(name),
      },
      { new: true }
    );
    console.log(UpProCate, "update");
    return res
      .status(200)
      .json({ UpProCate, message: "ProCategory data updated successfully" });
  }
});
