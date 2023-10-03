import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetSinglePlanService = createAsyncThunk(
  "getSinglePlan",
  async (data, thunkAPI) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.url}/room-plans/${data.id}`,
        {
          headers: {
            "Accept-Language": data.lang,
          },
        },
      );

      return response;
    } catch (e) {
      console.log(e);
    }
  },
);
