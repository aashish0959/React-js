import { configureStore } from "@reduxjs/toolkit";
import { product } from "./ProductSlice";

import { budget } from "./BudgetSlice";


export const store = configureStore({
    reducer: {
        product:product.reducer,
       
        budget:budget.reducer
    }
})