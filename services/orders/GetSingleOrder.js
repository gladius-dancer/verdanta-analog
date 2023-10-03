import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetSingleOrderService = createAsyncThunk(
  "order/get",
  async (id) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.url}/reservations/${id}`,
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  },
);
