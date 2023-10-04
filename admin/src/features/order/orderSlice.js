import { createSlice } from "@reduxjs/toolkit";
import {
  deleteOrder,
  getAllOrder,
  getSingUserOrder,

  resetState,
  updateOrder,
} from "./orderApiSlice.js";
const initialState = {
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,

  //   reducer
  reducers: {},

  extraReducers: (builder) => {
    // get all Order
    builder
      .addCase(getAllOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllOrder.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload.allUserorders;
      })

      // single  enquiries show
      .addCase(getSingUserOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingUserOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingUserOrder.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.singleUserOrder = action.payload.userOrder;
      })
      // update  enquiries show
      .addCase(updateOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.enquiries[
          state.enquiries.findIndex(
            (data) => data._id == action.payload.upOrder._id
          )
        ] = action.payload.upOrder;
      })
      // delete  enquiries show
      .addCase(deleteOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isError = false;
        state.isSuccess = true;
        state.enquiries = state.enquiries.filter(
          (data) => data._id !== action.payload.orderDelete._id
        );
      })
      .addCase(resetState, () => initialState);
  },
});

// get logged in user

// export selector
export const getOrderState = (state) => state.Order;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default orderSlice.reducer;
