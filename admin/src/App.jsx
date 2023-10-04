import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedInUser } from "./features/auth/authApiSlice.js";
import { getAllCustomer } from "./features/customer/customerApiSlice.js";
import { getAllBlog, getAllBlogCate } from "./features/blog/BlogApiSlice.js";
import { getAllEnquiry } from "./features/enquiry/EnquiryApiSlice.jsx";
import {
  getAllBrand,
  getAllColor,
  getAllProCategory,
} from "./features/product/productApiSlice.js";
import { uploadImage } from "./features/upload/uploadApiSlice.js";
import { getAllCoupon } from "./features/coupon/couponApiSlice.js";
import { getAllOrder } from "./features/order/orderApiSlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(getLoggedInUser());
      dispatch(getAllCustomer());
      dispatch(getAllProCategory());
      dispatch(getAllBlogCate());
      dispatch(getAllBlog());
      dispatch(getAllEnquiry());
      dispatch(getAllColor());
      dispatch(uploadImage());
      dispatch(getAllBrand());
      dispatch(getAllCoupon());
      dispatch(getAllOrder());
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
