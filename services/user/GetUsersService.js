import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUsersService = createAsyncThunk("getUser", async () => {
  try {
    const { data: response } = await axios.get(`${process.env.url}/staffs`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
});
