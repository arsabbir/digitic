import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice.js";
import customerSlice from "../features/customer/customerSlice.js";

import BlogSlice from "../features/blog/BlogSlice.js";
import EnquirySlice from "../features/enquiry/EnquirySlice.jsx";
import productSlice from "../features/product/productSlice.js";
import uploadSlice from "../features/upload/uploadSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    Customer: customerSlice,
    Product: productSlice,
    Blog: BlogSlice,
    Enquiry: EnquirySlice,
    Upload: uploadSlice,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

export default store;
