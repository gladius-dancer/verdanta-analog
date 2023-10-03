import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetRoomsService } from "@/services/rooms/GetRoomsService";
import { hide, show } from "@/store/slices/loaderSlice";

export const AddRoomService = createAsyncThunk(
  "addRoom",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.post(
        `${process.env.url}/rooms`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      thunkAPI.dispatch(GetRoomsService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Комната добавлен!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
