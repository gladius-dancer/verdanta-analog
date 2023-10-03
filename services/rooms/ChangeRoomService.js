import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetUsersService } from "@/services/user/GetUsersService";
import { GetRoomsService } from "@/services/rooms/GetRoomsService";
import { hide, show } from "@/store/slices/loaderSlice";

export const ChangeRoomService = createAsyncThunk(
  "changeRoom",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.patch(
        `${process.env.url}/rooms/${data.id}`,
        data.room,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
        },
      );
      thunkAPI.dispatch(GetRoomsService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Комната обнавлён!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
