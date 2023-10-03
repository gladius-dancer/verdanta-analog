import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetCountryService = createAsyncThunk(
  "getCountry",
  async (lang) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.url}/countries`,
        { "Accept-language": lang },
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  },
);
