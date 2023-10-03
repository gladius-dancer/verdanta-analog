import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "@/components/Toast/lib/Toast";
import { rejectUser, setUser } from "@/store/slices/authSlice";
import { hide, show } from "@/store/slices/loaderSlice";
import { json } from "react-router-dom";

export const GetCurrentUserService = createAsyncThunk(
  "currentUser",
  async (data, thunkAPI) => {
    try {
      const { data: response } = await axios.get(`${process.env.url}/user/me`, {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      });
      thunkAPI.dispatch(setUser(response));
      return response;
    } catch (e) {
      thunkAPI.dispatch(rejectUser(null));
      console.log(e);
    }
  },
);

export const LoginService = createAsyncThunk(
  "login",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const { data: response } = await axios.post(
        `${process.env.url}/token`,
        data,
      );
      thunkAPI.dispatch(GetCurrentUserService(response.access));
      localStorage.setItem("access_token", response.access);
      thunkAPI.dispatch(hide());
      new Toast().showSuccess("Вы успешно вошли!");

      return response;
    } catch (e) {
      thunkAPI.dispatch(hide());
      new Toast().showError("Логин или пароль не верный!");
      console.log(e);
    }
  },
);

export const GetRefreshService = createAsyncThunk(
  "auth/current",
  async (data) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.url}/token/refresh`,
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  },
);

export const LogoutService = createAsyncThunk(
  "auth/logout",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(show());
      const token = localStorage.getItem("access_token");
      await axios.get(`${process.env.url}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      thunkAPI.dispatch(hide());

      localStorage.removeItem("access_token");
      localStorage.setItem("auth", JSON.stringify(false));
      thunkAPI.dispatch(rejectUser());
      new Toast().showInfo("Вы успешно вышли!");
    } catch (e) {
      thunkAPI.dispatch(hide());

      console.log(e);
    }
  },
);
