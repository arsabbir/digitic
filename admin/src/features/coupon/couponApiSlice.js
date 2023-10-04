import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";


export const resetState = createAction("Reset_all");
// get all Coupon
export const getAllCoupon = createAsyncThunk(
  "coupon/getAllCoupon",
  async () => {
    try {
      const response = await axios.get(`${BaseUrl}coupon`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create brand
export const createCoupon = createAsyncThunk(
  "coupon/createCoupon",
  async (data) => {
    console.log("data");
    try {
      const response = await axios.post(`${BaseUrl}coupon`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get single coupon
export const getSingleCoupon = createAsyncThunk(
  "coupon/getSingleCoupon",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}coupon/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update brand
export const updateCoupon = createAsyncThunk(
  "coupon/updateCoupon",
  async ({ id, coupondata }) => {
    try {
      const response = await axios.put(`${BaseUrl}coupon/${id}`, coupondata, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update brand
export const deleteCoupon = createAsyncThunk(
  "coupon/deleteCoupon",
  async (data) => {
    try {
      const response = await axios.delete(`${BaseUrl}coupon/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
