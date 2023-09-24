import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomer } from "./customerApiSlice.js";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customers: [],
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
      .addCase(getAllCustomer.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllCustomer.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload.users;
      });
  },
});

// get logged in user

// export selector
export const getCustomerState = (state) => state.Customer;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default customerSlice.reducer;
