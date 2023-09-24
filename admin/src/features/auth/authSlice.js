import { createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser, loginUser, logout } from "./authApiSlice.js";

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
    // login
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      (state.isSuccess = true), (state.user = action.payload.user);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.message = "";
    });
    // get logged in user
    builder.addCase(getLoggedInUser.rejected, (state, action) => {
      state.isError = true;
      state.user = null;
    });
    builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.message = action.payload.message;
    });

    // logout
    builder.addCase(logout.rejected, (state, action) => {
      state.isError = true;
      state.message = action.error.message;
    })
   .addCase(logout.fulfilled, (state, action) => {
      state.isError = false;
      localStorage.removeItem("user");
      state.user = null;
      state.message = action.payload.message;
    });
  },
});

// get logged in user

// export selector
export const getAuthData = (state) => state.auth;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default authSlice.reducer;
