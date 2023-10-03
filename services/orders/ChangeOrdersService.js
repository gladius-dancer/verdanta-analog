import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetUsersService } from "@/services/user/GetUsersService";
import { hide, show } from "@/store/slices/loaderSlice";

export const ChangeOrdersService = createAsyncThunk(
  "changeOrder",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.patch(
        `${process.env.url}/reservations/${data.id}`,
        data.user,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
        },
      );
      thunkAPI.dispatch(GetUsersService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Заявка обнавлён!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
