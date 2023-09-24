import { createSlice } from "@reduxjs/toolkit";
import { getAllBlog, getAllBlogCate } from "./BlogApiSlice.js";


const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    blogCategories: [],
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  },

  //   reducer
  reducers: {},

  extraReducers: (builder) => {
    // login
    builder
      .addCase(getAllBlogCate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllBlogCate.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.blogCategories = action.payload.blogCategories;
      })
      .addCase(getAllBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload.blogs;
      });
  },
});

// get logged in user

// export selector
export const getBlogState = (state) => state.Blog;

// export actions
// export const {} = authSlice.actions;

// export authSlice
export default BlogSlice.reducer;
