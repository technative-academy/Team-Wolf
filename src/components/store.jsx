import { configureStore } from "@reduxjs/toolkit";
import askReducer from "./Ask/AskSlice";
import productsReducer from "./Products/ProductSlice";

export const store = configureStore({
  reducer: {
    ask: askReducer,
    products: productsReducer,
  },
});
