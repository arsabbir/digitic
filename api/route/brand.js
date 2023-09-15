import express from "express";

import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getSingleBrand,
  updateBrand,
} from "../controllers/brandController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllBrand).post(createBrand);
router
  .route("/:id")
  .get(getSingleBrand)
  .delete(deleteBrand)
  .put(updateBrand)
  .patch(updateBrand);

// export default router
export default router;
