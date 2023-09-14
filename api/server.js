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
import morgan from "morgan";


// initialization
const app = express();
dotenv.config();

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));

// set environment
const PORT = process.env.PORT || 8080;

// static folder
app.use(express.static("public"));

// routing
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/auth", authRouter);

// use error handler
app.use(errorHanlder);

// app listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
