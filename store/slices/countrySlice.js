import { createSlice } from "@reduxjs/toolkit";
import { GetCountryService } from "@/services/country/GetCountryService";

const initialState = {
  country: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetCountryService.fulfilled, (state, action) => {
      state.country = action.payload;
    });
  },
});

export const {} = countrySlice.actions;
export default countrySlice.reducer;
