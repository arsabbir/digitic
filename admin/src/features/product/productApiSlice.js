import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

export const getAllProCategory = createAsyncThunk(
  "proCategory/getAllProCategory",
  async () => {
    try {
      const response = await axios.get(`${BaseUrl}product-category`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const getAllColor = createAsyncThunk(
  "color/getAllColor",
  async () => {
    try {
      const response = await axios.get(`${BaseUrl}color`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}product`,data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
