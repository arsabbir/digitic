import asyncHandler from "express-async-handler";
import Brand from "../models/Brand.js";
import { createSlug } from "../helper/slug.js";

/**
 * @DESC Get all brands data
 * @ROUTE /api/v1/brand
 * @method GET
 * @access public
 */

export const getAllBrand = asyncHandler(async (req, res) => {
  const brands = await Brand.find();

  if (brands.length === 0) {
    return res.status(404).json({ message: "Brand not found" });
  }
  return res.status(200).json({brands});
});

/**
 * @DESC Get Single brands data
 * @ROUTE /api/v1/brand/:id
 * @method GET
 * @access public
 */
export const getSingleBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const brand = await Brand.findById(id);

  if (!brand) {
    return res.status(404).json({ message: "Brand data not found" });
  }

  res.status(200).json(brand);
});

/**
 * @DESC Create new Brand
 * @ROUTE /api/v1/brand
 * @method POST
 * @access public
 */
export const createBrand = asyncHandler(async (req, res) => {
  // get values
  const { brand } = req.body;

  // validations
  if (!brand) {
    return res.status(400).json({ message: "brand name is required" });
  }
  // email check
  const nameCheck = await Brand.findOne({ brand });

  if (nameCheck) {
    return res.status(400).json({ message: "Brand already exists" });
  }

  // create new brand
  const brands = await Brand.create({
    brand,
    slug: createSlug(brand),
  });

  res.status(200).json({ brands, message: "brand created successfully" });
});

/**
 * @DESC Delete Brand
 * @ROUTE /api/v1/brand/:id
 * @method DELETE
 * @access public
 */
export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const brand = await Brand.findById(id);
  if (!brand) {
    return res.status(200).json({ message: "brand not found" });
  }
  const brandDelete = await Brand.findByIdAndDelete(id);

  res.status(200).json({ message: "brand deleted" });
});

/**
 * @DESC Update Brand
 * @ROUTE /api/v1/brand/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Brand name is required" });
  }

  const brand = await Brand.findById(id);

  if (!brand) {
    return res.status(404).json({ message: "Brand data not found" });
  }
  if (brand) {
    // Update the blogCategory's name and slug
    const upBrand = await Brand.findByIdAndUpdate(
      brand._id,
      {
        name: name,
        slug: createSlug(name),
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ upBrand, message: "Brand data updated successfully" });
  }
});
