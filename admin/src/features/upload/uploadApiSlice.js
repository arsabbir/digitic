import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

export const uploadImage = createAsyncThunk(
  "upload/uploadImage",
  async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}upload`, data, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const deleteImage = createAsyncThunk(
  "image/deleteImage",
  async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}${data}`,  {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
