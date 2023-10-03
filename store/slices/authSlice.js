import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.currentUser = action.payload;
      localStorage.setItem("auth", JSON.stringify(true));
    },
    rejectUser: (state, action) => {
      state.isAuth = false;
      state.currentUser = null;
      localStorage.setItem("auth", JSON.stringify(false));
    },
  },

  extraReducers: (builder) => {},
});

export const { setUser, rejectUser } = authSlice.actions;
export default authSlice.reducer;
