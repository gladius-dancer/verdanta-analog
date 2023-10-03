import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";

export const GetNewsService = createAsyncThunk(
  "getNews",
  async (lang, thunkAPI) => {
    try {
      const { data: response } = await axios.get(`${process.env.url}/news`, {
        headers: {
          "Accept-Language": lang,
        },
      });

      return response;
    } catch (e) {
      console.log(e);
    }
  },
);
