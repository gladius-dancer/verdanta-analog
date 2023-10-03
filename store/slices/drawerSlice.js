import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: true,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    show(state, action) {
      return (state = { ...state, drawer: !state.drawer });
    },
  },
});

export const { show } = drawerSlice.actions;
export default drawerSlice.reducer;
