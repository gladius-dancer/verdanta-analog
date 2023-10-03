import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";
import roomReducer from "./slices/roomSlice";
import newsReducer from "./slices/newsSlice";
import userReducer from "./slices/userSlice";
import plansReducer from "./slices/planSlice";
import drawerReducer from "./slices/drawerSlice";
import loaderReducer from "./slices/loaderSlice";
import countryReducer from "./slices/countrySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    orders: orderReducer,
    rooms: roomReducer,
    news: newsReducer,
    plans: plansReducer,
    drawer: drawerReducer,
    loader: loaderReducer,
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
