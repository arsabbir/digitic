import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

export const getAllEnquiry = createAsyncThunk(
  "enquiry/getAllEnquiry",
  async () => {
    try {
      const response = await axios.get(`${BaseUrl}enquiry`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
