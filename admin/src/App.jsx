import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedInUser } from "./features/auth/authApiSlice.js";
import { getAllCustomer } from "./features/customer/customerApiSlice.js";
import { getAllBlog, getAllBlogCate } from "./features/blog/BlogApiSlice.js";
import { getAllEnquiry } from "./features/enquiry/EnquiryApiSlice.jsx";
import {
  getAllColor,
  getAllProCategory,
} from "./features/product/productApiSlice.js";
import { uploadImage } from "./features/upload/uploadApiSlice.js";

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
