import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { hide, show } from "@/store/slices/loaderSlice";

export const GetReviewsService = createAsyncThunk(
  "getReviews",
  async (params, thunkAPI) => {
    console.log(100, params);

    try {
      // thunkAPI.dispatch(show());
      const { data: response } = await axios.get(
        params.page_size
          ? `${process.env.url}/videos?page=${params.page}&page_size=${params.page_size}`
          : `${process.env.url}/videos?page=${params.page}`,
      );
      thunkAPI.dispatch(hide());
      return response;
    } catch (e) {
      // thunkAPI.dispatch(hide());
      console.log(e);
    }
  },
);
