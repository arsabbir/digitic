import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

// reset all staste
export const resetStaste = createAction("Reset_all");
// get all Enquiry
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

// create brand
export const createEnquiry = createAsyncThunk(
  "enquiry/createEnquiry",
  async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}enquiry`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get single enquiry
export const getSingleEnquiry = createAsyncThunk(
  "enquiry/getSingleEnquiry",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}enquiry/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update brand
export const updateEnquiry = createAsyncThunk(
  "enquiry/updateEnquiry",
  async ({ id, enqData }) => {
    try {
      const response = await axios.put(
        `${BaseUrl}enquiry/${id}`,
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
export const deleteEnquiry = createAsyncThunk(
  "enquiry/deleteEnquiry",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.delete(`${BaseUrl}enquiry/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
