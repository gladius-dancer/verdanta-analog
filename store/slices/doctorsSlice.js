import { createSlice } from "@reduxjs/toolkit";
import { GetDoctorsService } from "@/services/doctors/GetDoctorsService";

const initialState = {
  doctors: [],
};

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetDoctorsService.fulfilled, (state, action) => {
      state.doctors = action.payload;
    });
  },
});

export const {} = doctorsSlice.actions;
export default doctorsSlice.reducer;
