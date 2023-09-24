import { createSlice } from "@reduxjs/toolkit";
import { createProduct, getAllColor, getAllProCategory } from "./productApiSlice.js";


const productSlice = createSlice({
  name: "product",
  initialState: {
    proCategories: [],
    products: [],
    colors: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  },

  //   reducer
  reducers: {},

  extraReducers: (builder) => {
    // login
    builder
      .addCase(getAllProCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllProCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.proCategories = action.payload.proCategories;
        
      })
      .addCase(getAllColor.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllColor.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.colors = action.payload.colors;
        
      })

      // create product
      .addCase(createProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload.products;
        
      });
  },
});

// get logged in user

// export selector
export const getproductState = (state) => state.Product;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default productSlice.reducer;
