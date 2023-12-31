import express from "express";

import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getSingleBrand,
  updateBrand,
} from "../controllers/brandController.js";
import tokenVerify from "../middlewares/tokenVerify.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllBrand).post(isAdmin,createBrand);
router
  .route("/:id")
  .get(getSingleBrand)
  .delete(isAdmin,deleteBrand)
  .put(isAdmin,updateBrand)
  .patch(isAdmin,updateBrand);

// export default router
export default router;
