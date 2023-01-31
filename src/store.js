import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import postReducer from "./redux/postSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
