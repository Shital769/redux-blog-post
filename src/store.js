import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/userSlice.js";
import { postReducer } from "./redux/postSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
