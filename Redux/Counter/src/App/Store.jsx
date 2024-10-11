import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Feayuer/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
