// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { BaseUrl } from "../../utils/BaseUrl.js";
// import axios from "axios";

// export const getAllProCategory = createAsyncThunk(
//   "proCategory/getAllProCategory",
//   async () => {
//     try {
//       const response = await axios.get(`${BaseUrl}product-category`, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   }
// );
