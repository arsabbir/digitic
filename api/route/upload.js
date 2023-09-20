import express from "express";
import { isAdmin } from "../middlewares/isAdmin.js";
import { deletePhoto, uploadPhoto } from "../controllers/uploadController.js";
import { PhotoMulter } from "../utils/multer.js";
import tokenVerify from "../middlewares/tokenVerify.js";

// init router
const router = express.Router();

// verify token
router.use(tokenVerify)
// routes
router.route("/").post(PhotoMulter,isAdmin, uploadPhoto);
router.route("/delete-img/:id").delete(isAdmin, deletePhoto);

export default router;
