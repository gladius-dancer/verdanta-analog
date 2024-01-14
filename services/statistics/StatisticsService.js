import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetStatisticsService = createAsyncThunk(
  "getStatistics",
  async (thunkAPI) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.url}/statistics`,
      );

      return response;
    } catch (e) {
      console.log(e);
    }
  },
);
