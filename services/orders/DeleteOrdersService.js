import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetUsersService } from "@/services/user/GetUsersService";
import { hide, show } from "@/store/slices/loaderSlice";
import { GetOrdersService } from "@/services/orders/GetOrdersService";

export const DeleteOrdersService = createAsyncThunk(
  "deleteOrder",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.delete(
        `${process.env.url}/reservations/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      thunkAPI.dispatch(GetOrdersService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Заявка улалён!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
