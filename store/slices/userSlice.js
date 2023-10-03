import { createSlice } from "@reduxjs/toolkit";
import { GetUsersService } from "@/services/user/GetUsersService";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetUsersService.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
