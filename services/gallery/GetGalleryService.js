import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetGalleryService = createAsyncThunk("getGallery", async () => {
  try {
    const { data: response } = await axios.get(`${process.env.url}/gallery`);
    return response;
  } catch (e) {
    console.log(e);
  }
});
