import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetRoomsService = createAsyncThunk("getRooms", async () => {
  try {
    const { data: response } = await axios.get(`${process.env.url}/rooms`);
    return response;
  } catch (e) {
    console.log(e);
  }
});
