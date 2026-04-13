import { configureStore } from "@reduxjs/toolkit";
import typingReducer from "../features/typing/typingSlice";

export const store = configureStore({
  reducer: {
    typing: typingReducer,
  },
});
