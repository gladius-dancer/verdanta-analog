import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetNewsService } from "@/services/news/GetNews";
import { show, hide } from "@/store/slices/loaderSlice";

export const ChangeNewsService = createAsyncThunk(
  "changeNews",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.put(
        `${process.env.url}/news/${data.id}`,
        data.news,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
        },
      );
      thunkAPI.dispatch(GetNewsService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Новость обновлен!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
