import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetNewsService } from "@/services/news/GetNews";
import { hide, show } from "@/store/slices/loaderSlice";

export const DeletePlanService = createAsyncThunk(
  "deletePlan",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.delete(
        `${process.env.url}/room-plans/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      thunkAPI.dispatch(GetNewsService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Тариф успешно удалён!");
      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
