import { createSlice } from "@reduxjs/toolkit";
import { GetPlansService } from "@/services/plans/GetPlans";

const initialState = {
  plans: [],
};

const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetPlansService.fulfilled, (state, action) => {
      state.plans = action.payload;
    });
  },
});

export const {} = planSlice.actions;
export default planSlice.reducer;
