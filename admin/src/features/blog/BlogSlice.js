import { createSlice } from "@reduxjs/toolkit";
import {
  createBlog,
  createBlogCate,
  deleteBlog,
  deleteBlogCate,
  getAllBlog,
  getAllBlogCate,
  getSingleBlog,
  getSingleBlogCate,
  resetState,
  updateBlog,
  updateBlogCate,
} from "./BlogApiSlice.js";
const initialState = {
  blogCategories: [],
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const BlogSlice = createSlice({
  name: "blog",
  initialState,

  //   reducer
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = "";
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    //
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

      // create Blog Category
      .addCase(createBlogCate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createBlogCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createBlogCate.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.blogCategories.push(action.payload.blogCategory);
      })
      // single  blog category
      .addCase(getSingleBlogCate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlogCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingleBlogCate.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.singleBlogCate = action.payload.blogCategory;
      })
      // update  blog category
      .addCase(updateBlogCate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateBlogCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateBlogCate.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.blogCategories[
          state.blogCategories.findIndex(
            (data) => data._id == action.payload.UpBlogCate._id
          )
        ] = action.payload.UpBlogCate;
      })
      // delete  blog category
      .addCase(deleteBlogCate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBlogCate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteBlogCate.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.blogCategories = state.blogCategories.filter(
          (data) => data._id !== action.payload.blogCategoryDelete._id
        );
      })

      // get all blog
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
      })

      // create Blog Category
      .addCase(createBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.blogs.push(action.payload.newBlog);
      })
      // single  blog
      .addCase(getSingleBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.singleBlog = action.payload.getBlog;
        state.blogCategory = action.payload.getBlog.category;
        state.blogImages = action.payload.getBlog.images;
      })
      // update  blog
      .addCase(updateBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.enquiries[
          state.blogs.findIndex(
            (data) => data._id == action.payload.updateBlog._id
          )
        ];
      })
      // delete  blog category
      .addCase(deleteBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.blogs = state.blogs.filter(
          (data) => data._id !== action.payload.blog._id
        );
      })
      .addCase(resetState, () => initialState);
  },
});

// get logged in user

// export selector
export const getBlogState = (state) => state.Blog;

// export actions
export const { setMessageEmpty } = BlogSlice.actions;

// export authSlice
export default BlogSlice.reducer;
