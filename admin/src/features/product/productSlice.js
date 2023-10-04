import { createSlice } from "@reduxjs/toolkit";
import {
  createBrand,
  createColor,
  createProCategory,
  createProduct,
  deleteBrand,
  deleteColor,
  deleteProCategory,
  getAllBrand,
  getAllColor,
  getAllProCategory,
  getSingleBrand,
  getSingleColor,
  getSingleProCategory,
  updateBrand,
  updateColor,
  updateProCategory,
} from "./productApiSlice.js";

const productSlice = createSlice({
  name: "product",
  initialState: {
    proCategories: [],
    brands: [],
    products: [],
    colors: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  },

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
    // login
    builder
      .addCase(getAllProCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllProCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.proCategories = action.payload.proCategories;
      })

      // create product
      .addCase(createProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload.products;
      })

      // get all brand
      .addCase(getAllBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload.brands;
      })

      // create brand
      .addCase(createBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.brands.push(action.payload.brand);
      })

      // single  brand show
      .addCase(getSingleBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingleBrand.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.brandName = action.payload.brand;
      })

      // update  brand show
      .addCase(updateBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        console.log(action.payload.upBrand);
        state.isError = false;
        state.isSuccess = true;
        state.brands[
          state.brands.findIndex(
            (data) => data._id == action.payload.upBrand._id
          )
        ] = action.payload.upBrand;
      })

      // delete  brand show
      .addCase(deleteBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.brands = state.brands.filter(
          (data) => data._id !== action.payload.brandDelete._id
        );
      })

      // create product category
      .addCase(createProCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createProCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.proCategories.push(action.payload.proCategory);
      })

      // single  product cateagory
      .addCase(getSingleProCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleProCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingleProCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.singlePCate = action.payload.proCategory;
      })

      // update  product cateagory
      .addCase(updateProCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateProCategory.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isError = false;
        state.isSuccess = true;
        state.proCategories[
          state.proCategories.findIndex(
            (data) => data._id == action.payload.UpProCate._id
          )
        ] = action.payload.UpProCate;
      })

      // delete product cateagory
      .addCase(deleteProCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteProCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteProCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.proCategories = state.proCategories.filter(
          (data) => data._id !== action.payload.proCategoryDelete._id
        );
      })

      // get all color
      .addCase(getAllColor.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getAllColor.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.colors = action.payload.colors;
      })

      // create color
      .addCase(createColor.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createColor.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.colors.push(action.payload.color);
      })
      // single  color show
      .addCase(getSingleColor.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(getSingleColor.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.singleColor = action.payload.color;
      })

      // update  product cateagory  show
      .addCase(updateColor.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateColor.fulfilled, (state, action) => {
        console.log(action.payload.upColor);
        state.isError = false;
        state.isSuccess = true;
        state.colors[
          state.colors.findIndex(
            (data) => data._id == action.payload.upColor._id
          )
        ] = action.payload.upColor;
      })

      // delete product cateagory
      .addCase(deleteColor.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteColor.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.colors = state.colors.filter(
          (data) => data._id !== action.payload.colorDelete._id
        );
      });
  },
});

// export selector
export const getproductState = (state) => state.Product;

// export actions
export const { setMessageEmpty } = productSlice.actions;

// export authSlice
export default productSlice.reducer;
