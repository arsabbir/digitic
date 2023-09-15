import express from "express";
import {
  addWishlist,
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  productImageUpload,
  rating,
  updateProduct,
} from "../controllers/productController.js";
import tokenVerify from "../middlewares/tokenVerify.js";
import { ProductMulter } from "../utils/multer.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// Routes for managing products
router.route("/").get(getAllProduct).post(createProduct);

// Routes for managing the wishlist
router.route("/wishlist").put(addWishlist).patch(addWishlist);

// Routes for managing the rating
router.route("/rating").put(rating).patch(rating);

// Routes for managing images
router.route("/image/:id").put(ProductMulter,productImageUpload).patch(ProductMulter,productImageUpload);

// routes for managing the single product(update,delete,show)
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .put(updateProduct)
  .patch(updateProduct);

// export default router
export default router;
