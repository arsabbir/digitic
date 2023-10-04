import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

// get all prodcut category
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
// create product category
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      console.log(data);
      const response = await axios.post(`${BaseUrl}product`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// show all brand
export const getAllBrand = createAsyncThunk("brand/getAllBrand", async () => {
  try {
    const response = await axios.get(`${BaseUrl}brand`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// reset all state
export const resetState = createAction("Reset_all");

// create brand
export const createBrand = createAsyncThunk(
  "brand/createBrand",
  async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}brand`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// single brand show
export const getSingleBrand = createAsyncThunk(
  "brand/getSingleBrand",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}brand/${data}`, {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update brand
export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async ({ id, brandData }) => {
    try {
      const response = await axios.put(`${BaseUrl}brand/${id}`, brandData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete brand
export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (data) => {
    try {
      const response = await axios.delete(`${BaseUrl}brand/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// create product category
export const createProCategory = createAsyncThunk(
  "category/createProCategory",
  async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}product-category`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// single product category show
export const getSingleProCategory = createAsyncThunk(
  "category/getSingleProCategory",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}product-category/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update brand
export const updateProCategory = createAsyncThunk(
  "category/updateProCategory",
  async ({ id, pCateData }) => {
    try {
      const response = await axios.put(
        `${BaseUrl}product-category/${id}`,
        pCateData,
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
export const deleteProCategory = createAsyncThunk(
  "category/deleteProCategory",
  async (data) => {
    try {
      const response = await axios.delete(
        `${BaseUrl}product-category/${data}`,
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

// All Color show
export const getAllColor = createAsyncThunk("color/getAllColor", async () => {
  try {
    const response = await axios.get(`${BaseUrl}color`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// create Color show
export const createColor = createAsyncThunk(
  "color/createColor",
  async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}color`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// single color show
export const getSingleColor = createAsyncThunk(
  "color/getSingleColor",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}color/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update color show
export const updateColor = createAsyncThunk(
  "color/updateColor",
  async ({ id, colorData }) => {
    try {
      const response = await axios.put(`${BaseUrl}color/${id}`, colorData, {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete color show
export const deleteColor = createAsyncThunk(
  "color/deleteColor",
  async (data) => {
    try {
      const response = await axios.delete(`${BaseUrl}color/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
