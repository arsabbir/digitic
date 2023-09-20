// import section
import asyncHandler from "express-async-handler";
import { DeleteImage, ImageUpload } from "../utils/cloudinary.js";

/**
 * @DESC Photo Upload
 * @ROUTE /api/v1/auth/upload
 * @method POST
 * @access public
 */

export const uploadPhoto = asyncHandler(async (req, res) => {
  // File management

  let photos = [];
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      // upload image and wait for it to resolve

      const uploadedImage = await ImageUpload(req.files[i].path);
      photos.push(uploadedImage);
      console.log(photos);
    }
  }

  return res.status(200).json({ photos, message: "Photo Upload Success" });
});

/**
 * @DESC Delete Image
 * @ROUTE /api/v1/auth/upload
 * @method POST
 * @access public
 */

export const deletePhoto = asyncHandler(async (req, res) => {
  // get value
  const { id } = req.params;
  
//   photo delete
  const deletephoto = await DeleteImage(id);

  return res.status(200).json({ deletephoto, message: "Photo Delete Success" });
});
