import { createSlice } from "@reduxjs/toolkit";

import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiry,
  getSingleEnquiry,
  resetStaste,
  updateEnquiry,
} from "./EnquiryApiSlice.jsx";
const initialState = {
  enquiries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const enquirySlice = createSlice({
  name: "enquiry",
  initialState,

  //   reducer
  reducers: {},

  extraReducers: (builder) => {
    // get all Enquiry
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
      })
      // create enquiries
      .addCase(createEnquiry.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createEnquiry.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.enquiries.push(action.payload.enquiries);
      })
      // single  enquiries show
      .addCase(getSingleEnquiry.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingleEnquiry.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.singleEnquiry = action.payload.enquiry;
      })
      // update  enquiries show
      .addCase(updateEnquiry.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateEnquiry.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.enquiries[
          state.enquiries.findIndex(
            (data) => data._id == action.payload.upEnquiry._id
          )
        ] = action.payload.upEnquiry;
      })
      // delete  enquiries show
      .addCase(deleteEnquiry.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteEnquiry.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isError = false;
        state.isSuccess = true;
        state.enquiries = state.enquiries.filter(
          (data) => data._id !== action.payload.enquiryDelete._id
        );
      })
      .addCase(resetStaste, () => initialState);
  },
});

// get logged in user

// export selector
export const getEnquiryState = (state) => state.Enquiry;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default enquirySlice.reducer;
