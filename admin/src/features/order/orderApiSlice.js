import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

// reset all staste
export const resetState = createAction("Reset_all");
// get all Order
export const getAllOrder = createAsyncThunk(
  "order/getAllOrder",
  async () => {
    try {
      console.log("all_orders");
      const response = await axios.get(`${BaseUrl}user/allorders`, {
        withCredentials: true,
      });
console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);



// get single order
export const getSingUserOrder = createAsyncThunk(
  "order/getSingUserOrder",
  async (data) => {
    try {


      const response = await axios.get(`${BaseUrl}user/orderuserid/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update brand
export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async ({ id, enqData }) => {
    try {
      const response = await axios.put(
        `${BaseUrl}order/${id}`,
        { status: enqData },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update brand
export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.delete(`${BaseUrl}order/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
