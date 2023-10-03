import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    show(state, action) {
      return (state = { ...state, loader: true });
    },
    hide(state, action) {
      return (state = { ...state, loader: false });
    },
  },
});

export const { show, hide } = loaderSlice.actions;
export default loaderSlice.reducer;
