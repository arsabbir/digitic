// import { createSlice } from "@reduxjs/toolkit";
// import { getAllProCategory } from "./ProCategoryApiSlice.js";

// const proCategoroySlice = createSlice({
//   name: "proCategory",
//   initialState: {
//     proCategories: [],
//     isError: false,
//     isLoading: false,
//     isSuccess: false,
//     message: "",
//   },

//   //   reducer
//   reducers: {},

//   extraReducers: (builder) => {
//     // login
//     builder
//       .addCase(getAllProCategory.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(getAllProCategory.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.error.message;
//       })
//       .addCase(getAllProCategory.fulfilled, (state, action) => {
//         state.isError = false;
//         state.isSuccess = true;
//         state.proCategories = action.payload.proCategories;
        
//       });
//   },
// });

// // get logged in user

// // export selector
// export const getProCategoryState = (state) => state.ProductCategory;

// // export actions
// // export const {} = authSlice.actions;

// // export authSlice
// export default proCategoroySlice.reducer; 
