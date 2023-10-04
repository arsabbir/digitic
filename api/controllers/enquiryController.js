import asyncHandler from "express-async-handler";
import Enquiry from "../models/Enquiry.js";
import { createSlug } from "../helper/slug.js";
import { response } from "express";

/**
 * @DESC Get all enquirys data
 * @ROUTE /api/v1/enquiry
 * @method GET
 * @access public
 */

export const getAllEnquiry = asyncHandler(async (req, res) => {
  const enquiries = await Enquiry.find();

  if (enquiries.length === 0) {
    return res.status(404).json({ message: "Enquiry  data not found" });
  }
  return res.status(200).json({ enquiries });
});

/**
 * @DESC Get Single enquirys data
 * @ROUTE /api/v1/enquiry/:id
 * @method GET
 * @access public
 */
export const getSingleEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const enquiry = await Enquiry.findById(id);

  if (!enquiry) {
    return res.status(404).json({ message: "Enquiry data not found" });
  }

  res.status(200).json({enquiry});
});

/**
 * @DESC Create new Enquiry
 * @ROUTE /api/v1/enquiry
 * @method POST
 * @access public
 */
export const createEnquiry = asyncHandler(async (req, res) => {
  // get values
  const { name, email, mobile, comment } = req.body;

  // validations
  if (!name || !email || !mobile || !comment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // create new enquiry
  const enquiry = await Enquiry.create(req.body);

  res.status(200).json({ enquiry, message: "enquiry created successfully" });
});

/**
 * @DESC Delete Enquiry
 * @ROUTE /api/v1/enquiry/:id
 * @method DELETE
 * @access public
 */
export const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const enquiry = await Enquiry.findById(id);
  if (!enquiry) {
    return res.status(200).json({ message: "enquiry not found" });
  }
  const enquiryDelete = await Enquiry.findByIdAndDelete(id);

  res.status(200).json({ enquiryDelete, message: "enquiry deleted" });
});

/**
 * @DESC Update Enquiry
 * @ROUTE /api/v1/enquiry/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateEnquiry = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  //   const { name } = req.body;

  //   if (!name) {
  //     return res.status(400).json({ message: "Enquiry name is required" });
  //   }

  const enquiry = await Enquiry.findById(id);

  if (!enquiry) {
    return res.status(404).json({ message: "Enquiry data not found" });
  }
  if (enquiry) {
    // Update the blogCategory's name and slug
    const upEnquiry = await Enquiry.findByIdAndUpdate(enquiry._id, req.body, {
      new: true,
    });
    // response
    return res
      .status(200)
      .json({ upEnquiry, message: "Enquiry data updated successfully" });
  }
});

/**
 * @DESC Update Enquiry status
 * @ROUTE /api/v1/enquiry/:id
 * @method PUT/PATCH
 * @access public
 */

// Controller for updating the status of an enquiry
export const updateEnquiryStatus = asyncHandler(async (req, res) => {
  // Find the enquiry by ID
  const enquiry = await Enquiry.findById(req.params.id);

  const status = req.body;

  if (!enquiry) {
    return res.status(404).json({ message: "Enquiry not found" });
  }

  // Update the status
  enquiry.status = req.body.status;

  // Save the updated enquiry
  await enquiry.save();
  console.log(enquiry);
  return res
    .status(200)
    .json({ enquiry, message: "Enquiry status updated successfully" });
});
