import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../utils/BaseUrl.js";
import axios from "axios";

// reset state
export const resetState = createAction("Reset_all");
// get all blog category
export const getAllBlogCate = createAsyncThunk(
  "blogCate/getAllBlogCate",
  async () => {
    try {
      const response = await axios.get(`${BaseUrl}blog-category`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// create blog category
export const createBlogCate = createAsyncThunk(
  "blogCate/createBlogCate",
  async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}blog-category`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// get single blog category
export const getSingleBlogCate = createAsyncThunk(
  "blogCate/getSingleBlogCate",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}blog-category/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update blog category
export const updateBlogCate = createAsyncThunk(
  "blogCate/updateBlogCate",
  async ({ id, bCateData }) => {
    try {
      const response = await axios.put(
        `${BaseUrl}blog-category/${id}`,
        bCateData,
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
// update delete blog category
export const deleteBlogCate = createAsyncThunk(
  "blogCate/deleteBlogCate",
  async (data) => {
    try {
      const response = await axios.delete(`${BaseUrl}blog-category/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get all blog
export const getAllBlog = createAsyncThunk("blog/getAllBlog", async () => {
  try {
    const response = await axios.get(`${BaseUrl}blog`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// create blog
export const createBlog = createAsyncThunk("blog/createBlog", async (data) => {
  try {
    const response = await axios.post(`${BaseUrl}blog`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// get single blog
export const getSingleBlog = createAsyncThunk(
  "blog/getSingleBlog",
  async (data) => {
    try {
      const response = await axios.get(`${BaseUrl}blog/${data}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update blog
export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ id, blogData }) => {
    try {
      const response = await axios.put(`${BaseUrl}blog/${id}`, blogData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// update delete blog
export const deleteBlog = createAsyncThunk("blog/deleteBlog", async (data) => {
  try {
    const response = await axios.delete(`${BaseUrl}blog/${data}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
