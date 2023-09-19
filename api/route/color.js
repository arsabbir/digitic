import express from "express";

import {
  createColor,
  deleteColor,
  getAllColor,
  getSingleColor,
  updateColor,
} from "../controllers/colorController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllColor).post(createColor);
router
  .route("/:id")
  .get(getSingleColor)
  .delete(deleteColor)
  .put(updateColor)
  .patch(updateColor);

// export default router
export default router;
