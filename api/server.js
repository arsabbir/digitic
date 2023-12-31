import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { mongoDBConnect } from "./config/db.js";
import { errorHanlder } from "./middlewares/errorHandler.js";
import authRouter from "./route/auth.js";
import userRouter from "./route/user.js";
import blogRouter from "./route/blog.js";
import productRouter from "./route/product.js";
import brandRouter from "./route/brand.js";
import colorRouter from "./route/color.js";
import uploadRouter from "./route/upload.js";
import enquiryRouter from "./route/enquiry.js";
import proCategoryRouter from "./route/proCategory.js";
import blogCategoryRouter from "./route/blogCategory.js";
import couponRouter from "./route/coupon.js";
import morgan from "morgan";
import cors from "cors";

// initialization
const app = express();
dotenv.config();

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// set environment
const PORT = process.env.PORT || 8080;

// static folder
app.use(express.static("public"));

// routing
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/color", colorRouter);
app.use("/api/v1/upload", uploadRouter);
app.use("/api/v1/enquiry", enquiryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/product-category", proCategoryRouter);
app.use("/api/v1/blog-category", blogCategoryRouter);
app.use("/api/v1/coupon", couponRouter);
app.use("/api/v1/auth", authRouter);

// use error handler
app.use(errorHanlder);

// app listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
