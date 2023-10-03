import { createSlice } from "@reduxjs/toolkit";
import { GetNewsService } from "@/services/news/GetNews";
import { GetOrdersService } from "@/services/orders/GetOrdersService";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action) {
      state = { ...state, ...action.payload };
      return state;
    },
    changeChildsData(state, action) {
      state = {
        ...state,
        childsData: [...Array(action.payload)],
        childs: action.payload,
      };
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(GetOrdersService.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export const { addOrder, changeChildsData } = orderSlice.actions;
export default orderSlice.reducer;
