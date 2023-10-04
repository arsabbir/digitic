import { createSlice } from "@reduxjs/toolkit";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupon,
  getSingleCoupon,
  resetState,
  updateCoupon,
} from "./couponApiSlice.js";
const initialState = {
  coupons: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const couponSlice = createSlice({
  name: "coupon",
  initialState,

  //   reducer
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = "";
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    // get all Coupon
    builder
      .addCase(getAllCoupon.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllCoupon.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.coupons = action.payload.coupons;
      })
      // create coupons
      .addCase(createCoupon.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.coupons.push(action.payload.coupon);
      })
      // single  coupons show
      .addCase(getSingleCoupon.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingleCoupon.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.singleCoupon = action.payload.coupon;
      })
      // update  coupons show
      .addCase(updateCoupon.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateCoupon.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.coupons[
          state.coupons.findIndex(
            (data) => data._id == action.payload.updateCoupon._id
          )
        ] = action.payload.updateCoupon;
      })
      // delete  coupons show
      .addCase(deleteCoupon.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.coupons = state.coupons.filter(
          (data) => data._id !== action.payload.deleteCoupon._id
        );
      })
      .addCase(resetState, () => initialState);
  },
});

// get logged in user

// export selector
export const getCouponState = (state) => state.Coupon;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default couponSlice.reducer;
