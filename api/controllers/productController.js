import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import { createSlug } from "../helper/slug.js";
import { v2 as cloudinary } from "cloudinary";
import User from "../models/User.js";

cloudinary.config({
  cloud_name: "drq2ieflq",
  api_key: "718961483599887",
  api_secret: "zaM4dfcS2djdofxgDNhLla_tABk",
});

/**
 * @DESC Get Single products data
 * @ROUTE /api/v1/product/:id
 * @method GET
 * @access public
 */
export const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product data not found" });
  }

  res.status(200).json(product);
});

/**
 * @DESC Create new Product
 * @ROUTE /api/v1/product
 * @method POST
 * @access public
 */
export const createProduct = asyncHandler(async (req, res) => {
  // get values
  const productData = req.body;
  const { name, brand, categories, price, desc, quantity } = productData;

  // validations
  if (!name || !brand || !categories || !price || !desc || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // email check
  const nameCheck = await Product.findOne({ name });

  if (nameCheck) {
    return res.status(400).json({ message: "Product already exists" });
  }

  // file manage
  //   let productPhotos = [];
  //   if (req.files) {
  //     for (let i = 0; i < req.files.length; i++) {
  //       const result = await cloudinary.uploader.upload(req.files[i].path);
  //       productPhotos.push(result.secure_url);
  //     }
  //   }
  //   const result = await cloudinary.uploader.upload(req.file.path);

  productData.slug = createSlug(name);

  // create new product
  const product = await Product.create(productData);

  res.status(200).json({ product, message: "product created successfully" });
});

/**
 * @DESC Delete Product
 * @ROUTE /api/v1/product/:id
 * @method DELETE
 * @access public
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const productDelete = await Product.findByIdAndDelete(id);
  if (product.photo) {
    const publicId = product.photo.match(/\/([^/]+)$/)[1].split(".")[0];
    await cloudinary.uploader.destroy(publicId);
  }
  console.log(productDelete);
  res.status(200).json(productDelete);
});

/**
 * @DESC Update Product
 * @ROUTE /api/v1/product/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Product name is required" });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product data not found" });
  } else {
    // Check if a file was uploaded
    // if (req.file) {
    //   console.log("product file done");
    //   // Delete the previous photo if it exists
    //   if (product.photo) {
    //     const publicId = product.photo.match(/\/([^/]+)$/)[1].split(".")[0];
    //     await cloudinary.uploader.destroy(publicId);
    //   }
    //   const result = await cloudinary.uploader.upload(req.file.path);
    //   // Update the product's photo field with the new photo data
    //   product.photo = result.secure_url;
    // }

    // Update the product's name and slug
    product.name = name;
    product.slug = createSlug(name);

    res
      .status(200)
      .json({ product, message: "Product data updated successfully" });
  }
});

/**
 * @DESC Get all products data
 * @ROUTE /api/v1/product
 * @method GET
 * @access public
 */

export const getAllProduct = asyncHandler(async (req, res) => {
  // Filtering
  const queryObj = { ...req.query };
  const excludeFields = ["page", "sort", "limit", "fields"];
  excludeFields.forEach((el) => delete queryObj[el]);
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Product.find(JSON.parse(queryStr));

  // Sorting

  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // limiting the fields

  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  // pagination
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);
  if (req.query.page) {
    const productCount = await Product.countDocuments();
    if (skip >= productCount) {
      return res.status(404).json({ message: "This Page does not exists" });
    }
  }

  const products = await query;
  if (products.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }
  res.status(200).json(products);
});

/**
 * @DESC Add wishlist
 * @ROUTE /api/v1/product
 * @method PUT/PATCH
 * @access public
 */

export const addWishlist = asyncHandler(async (req, res) => {
  // find login user
  const loginUser = req.me;

  // product Id
  const { productId } = req.body;

  // find login user data in the database
  const userData = await User.findById(loginUser._id);

  // check if the product is already in the wishlist
  const alreadyInWishlist = userData?.wishlist?.includes(productId);

  if (alreadyInWishlist) {
    // Remove the product from the wishlist
    const updatedUser = await User.findByIdAndUpdate(
      loginUser._id,
      {
        $pull: { wishlist: productId },
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ updatedUser, message: "Remove from wishlist" });
  } else {
    // Add the product to the wishlist
    const updatedUser = await User.findByIdAndUpdate(
      loginUser._id,
      {
        $push: { wishlist: productId },
      },
      { new: true }
    );

    return res.status(200).json({ updatedUser, message: "Added to wishlist" });
  }
});

/**
 * @DESC Rating
 * @ROUTE /api/v1/product/rating
 * @method PUT/PATCH
 * @access public
 */

export const rating = asyncHandler(async (req, res) => {
  // Get user and input data
  const loginUser = req.me;
  const { star, comment, productId } = req.body;

  // Validate input
  if (!star || !comment || !productId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Find the product
  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Check if the user has already rated
  const alreadyRated = product.ratings.some((rating) =>
    rating.postedby.equals(loginUser._id)
  );

  if (alreadyRated) {
    // Update the existing rating
    product.ratings.forEach((rating) => {
      if (rating.postedby.equals(loginUser._id)) {
        rating.star = star;
        rating.comment = comment;
      }
    });
  } else {
    // Add a new rating
    product.ratings.push({
      star,
      comment,
      postedby: loginUser._id,
    });
  }

  // Calculate the new total rating
  const totalRating = product.ratings.reduce(
    (prev, curr) => prev + curr.star,
    0
  );
  const avarageRating = (totalRating / product.ratings.length).toFixed(1);

  // Update the product's totalRating
  product.totalRating = avarageRating;

  // Save the updated product
  const updatedProduct = await product.save();

  return res
    .status(200)
    .json({ finalProduct: updatedProduct, message: "Rating successful" });
});

// /**
//  * @DESC Image Upload
//  * @ROUTE /api/v1/product/image-upload
//  * @method PUT/PATCH
//  * @access public
//  */
// export const productImageUpload = asyncHandler(async (req, res) => {
//   // get value
//   const { id } = req.params;

//   // check data
//   const product = await Product.findById(id);

//   // Product not found
//   if (!product) {
//     return res.status(200).json({ message: "Data not found" });
//   }

//   // File management

//   let photos = [];
//   if (req.files) {
//     for (let i = 0; i < req.files.length; i++) {
//       // upload image and wait for it to resolve
//       try {
//         const uploadedImage = await ImageUpload(req.files[i].path);
//         // photos.push(uploadedImage);

//         // Update the product with the uploaded image path
//         const upImage = await Product.findByIdAndUpdate(product._id, {
//           $push: { photos: uploadedImage },
//         });
//       } catch (error) {
//         // Handle any errors that occurred during image upload
//         console.error("Image upload error:", error);
//       }
//     }
//   }

//   return res.status(200).json({ message: "Image Upload Success" });
// });
