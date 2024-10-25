
import { createSlice } from "@reduxjs/toolkit";
import { addProduct, product } from "./ProductSlice";

export const budget = createSlice({
    name: "budget",
    initialState: {
        budgetMoney: 0,
    },
    reducers:{
        addMoney:(state,action)=>{
            console.log( Number(action.payload));
            state.budgetMoney += Number(action.payload);
            

        }
        

    },
    extraReducers : ((builder)=>{
        builder.addCase(addProduct, (state, action) => {
            console.log("pro"+action.payload.ProductPrice);
            
            state.budgetMoney-= action.payload.ProductPrice

        })
    })

})
export const {addMoney} = budget.actions
export default budget.reducer