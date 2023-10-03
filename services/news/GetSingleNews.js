import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetSingleNewsService = createAsyncThunk(
  "getSingleNews",
  async (data, thunkAPI) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.url}/news/${data.id}`,
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
