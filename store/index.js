import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import newsReducer from "./slices/newsSlice";
import reviewsReducer from "./slices/reviewsSlice";
import userReducer from "./slices/userSlice";
import drawerReducer from "./slices/drawerSlice";
import loaderReducer from "./slices/loaderSlice";
import doctorsReducer from "./slices/doctorsSlice";
import galleryReducer from "./slices/gallerySlice";
import statReducer from "./slices/statisticsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    news: newsReducer,
    reviews: reviewsReducer,
    drawer: drawerReducer,
    loader: loaderReducer,
    doctors: doctorsReducer,
    gallery: galleryReducer,
    statistics: statReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
