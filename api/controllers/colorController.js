import asyncHandler from "express-async-handler";
import Color from "../models/Color.js";
import { createSlug } from "../helper/slug.js";

/**
 * @DESC Get all colors data
 * @ROUTE /api/v1/color
 * @method GET
 * @access public
 */

export const getAllColor = asyncHandler(async (req, res) => {
  const colors = await Color.find();

  if (colors.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }
  return res.status(200).json({colors});
});

/**
 * @DESC Get Single colors data
 * @ROUTE /api/v1/color/:id
 * @method GET
 * @access public
 */
export const getSingleColor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const color = await Color.findById(id);

  if (!color) {
    return res.status(404).json({ message: "Color data not found" });
  }

  res.status(200).json(color);
});

/**
 * @DESC Create new Color
 * @ROUTE /api/v1/color
 * @method POST
 * @access public
 */
export const createColor = asyncHandler(async (req, res) => {
  // get values
  const { name } = req.body;

  // validations
  if (!name) {
    return res.status(400).json({ message: "color name is required" });
  }
  // email check
  const nameCheck = await Color.findOne({ name });

  if (nameCheck) {
    return res.status(400).json({ message: "Color already exists" });
  }

  // create new color
  const color = await Color.create({
    name,
    slug: createSlug(name),
  });

  res.status(200).json({ color, message: "color created successfully" });
});

/**
 * @DESC Delete Color
 * @ROUTE /api/v1/color/:id
 * @method DELETE
 * @access public
 */
export const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const color = await Color.findById(id);
  if (!color) {
    return res.status(200).json({ message: "color not found" });
  }
  const colorDelete = await Color.findByIdAndDelete(id);

  res.status(200).json({ message: "color deleted" });
});

/**
 * @DESC Update Color
 * @ROUTE /api/v1/color/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Color name is required" });
  }

  const color = await Color.findById(id);

  if (!color) {
    return res.status(404).json({ message: "Color data not found" });
  }
  if (color) {
    // Update the blogCategory's name and slug
    const upColor = await Color.findByIdAndUpdate(
      color._id,
      {
        name: name,
        slug: createSlug(name),
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ upColor, message: "Color data updated successfully" });
  }
});
