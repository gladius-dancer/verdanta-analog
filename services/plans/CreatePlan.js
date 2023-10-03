import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { GetPlansService } from "@/services/plans/GetPlans";
import { hide, show } from "@/store/slices/loaderSlice";

export const CreatePlanService = createAsyncThunk(
  "createPlan",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.post(
        `${process.env.url}/room-plans`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      thunkAPI.dispatch(GetPlansService());
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Тариф создан!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Что то пошло не так!");
      console.log(e);
    }
  },
);
