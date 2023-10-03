import { createSlice } from "@reduxjs/toolkit";
import { GetRoomsService } from "@/services/rooms/GetRoomsService";

const initialState = {
  rooms: [],
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    // setRooms: (state, action) => {
    //   state.rooms = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(GetRoomsService.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
  },
});

export const { setRooms } = roomSlice.actions;
export default roomSlice.reducer;
