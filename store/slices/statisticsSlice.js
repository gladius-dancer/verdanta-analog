import { createSlice } from "@reduxjs/toolkit";
import { GetStatisticsService } from "@/services/statistics/StatisticsService";

const initialState = {
  statistics: [],
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetStatisticsService.fulfilled, (state, action) => {
      state.statistics = action.payload;
    });
  },
});

export const {} = statisticsSlice.actions;
export default statisticsSlice.reducer;
