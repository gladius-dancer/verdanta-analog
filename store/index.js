import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import newsReducer from "./slices/newsSlice";
import userReducer from "./slices/userSlice";
import drawerReducer from "./slices/drawerSlice";
import loaderReducer from "./slices/loaderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    news: newsReducer,
    drawer: drawerReducer,
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
