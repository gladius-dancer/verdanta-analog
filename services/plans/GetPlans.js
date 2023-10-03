import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";

export const GetPlansService = createAsyncThunk(
  "getPlans",
  async (lang, thunkAPI) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.url}/room-plans`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Accept-Language": lang,
          },
        },
      );

      return response;
    } catch (e) {
      console.log(e);
    }
  },
);
