import { configureStore } from "@reduxjs/toolkit";
import askReducer from "./Ask/AskSlice";

export const store = configureStore({
  reducer: {
    ask: askReducer,
  },
});
