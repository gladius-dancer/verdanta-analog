import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetUsersService } from "@/services/user/GetUsersService";
import { hide, show } from "@/store/slices/loaderSlice";

export const AddUserService = createAsyncThunk(
  "addUser",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.post(
        `${process.env.url}/staffs`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      thunkAPI.dispatch(GetUsersService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Пользователь добавлен!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
