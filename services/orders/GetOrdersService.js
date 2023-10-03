import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetOrdersService = createAsyncThunk("orders/get", async () => {
  try {
    const { data: response } = await axios.get(
      `${process.env.url}/reservations`,
    );
    return response;
  } catch (e) {
    console.log(e);
  }
});
