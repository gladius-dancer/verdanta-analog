import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetDoctorsService = createAsyncThunk("getDoctors", async () => {
  try {
    const { data: response } = await axios.get(`${process.env.url}/doctors`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
});
