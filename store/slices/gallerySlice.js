import { createSlice } from "@reduxjs/toolkit";
import { GetGalleryService } from "@/services/gallery/GetGalleryService";

const initialState = {
  gallery: [],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetGalleryService.fulfilled, (state, action) => {
      state.gallery = action.payload;
    });
  },
});

export const {} = gallerySlice.actions;
export default gallerySlice.reducer;
