import { createSlice } from "@reduxjs/toolkit";
import { GetNewsService } from "@/services/news/GetNews";

const initialState = {
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetNewsService.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
