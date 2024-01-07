import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { show, hide } from "@/store/slices/loaderSlice";

export const CreateAppointmentService = createAsyncThunk(
  "addAppointment",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      thunkAPI.dispatch(show());
      const { data: response } = await axios.post(
        `${process.env.url}/appointments`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Заявка отправлена!");

      // return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Повторите заново!");
      console.log(e);
    }
  },
);
