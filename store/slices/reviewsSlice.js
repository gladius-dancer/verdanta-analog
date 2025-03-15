import { createSlice } from "@reduxjs/toolkit";
import { GetReviewsService } from "@/services/reviews/GetReviewsService";

const initialState = {
  news: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetReviewsService.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});

export const {} = reviewsSlice.actions;
export default reviewsSlice.reducer;
