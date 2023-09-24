import { createSlice } from "@reduxjs/toolkit";

import { getAllEnquiry } from "./EnquiryApiSlice.jsx";

const enquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    enquiries: [],
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
      .addCase(getAllEnquiry.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllEnquiry.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.enquiries = action.payload.enquiries;
      });
  },
});

// get logged in user

// export selector
export const getEnquiryState = (state) => state.Enquiry;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default enquirySlice.reducer;
