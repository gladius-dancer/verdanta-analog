import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetUsersService } from "@/services/user/GetUsersService";
import { GetRoomsService } from "@/services/rooms/GetRoomsService";
import { hide, show } from "@/store/slices/loaderSlice";

export const DeleteRoomService = createAsyncThunk(
  "deleteRoom",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.delete(
        `${process.env.url}/rooms/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      thunkAPI.dispatch(GetRoomsService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Комната улалён!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
