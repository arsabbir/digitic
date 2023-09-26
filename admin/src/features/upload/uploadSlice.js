import { createSlice } from "@reduxjs/toolkit";

import { deleteImage, uploadImage } from "./uploadApiSlice.js";

const uploadSlice = createSlice({
  name: "image",
  initialState: {
    images: [],
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
      .addCase(uploadImage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload.photos;
      })
      .addCase(deleteImage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.images = [];
      });
  },
});

// get logged in user

// export selector
export const getUploadState = (state) => state.Upload;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default uploadSlice.reducer;
