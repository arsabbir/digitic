import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authApiSlice.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  },

  //   reducer
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Rejected";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      localStorage.setItem("user", action.payload.user);
      state.message = action.payload.message;
    });
    // get logged in user
    // builder.addCase(getLoggedInUser.rejected, (state, action) => {
    //   state.isError = true;
    //   state.user = null;
    // });
    // builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.message = action.payload.message;
    // });
  },
});

// get logged in user

// export selector
export const getAuthData = (state) => state.auth;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default authSlice.reducer;
