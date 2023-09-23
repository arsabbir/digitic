import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

// login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await axios.post(`${BaseUrl}auth/login`, data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// logged in user
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get(`${BaseUrl}auth/me`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// logout
export const logout = createAsyncThunk("auth/logout", async () => {
  console.log("okay");
  try {
    const response = await axios.post(`${BaseUrl}auth/logout`,null, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
