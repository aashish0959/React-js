import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterSlice";
import todo from "../features/todoSlice";
import Api from "../features/ApiSlice"; // Make sure to import Api correctly

export const store = configureStore({
    reducer: {
        counterKey: counter,
        todokey: todo,
        apikey: Api, // Corrected ApiProvider to Api
    },
});
