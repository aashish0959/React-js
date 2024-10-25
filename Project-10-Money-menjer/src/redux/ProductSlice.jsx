import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
    name: "product",
    initialState: {
        items:[]
    },
    reducers:{
        addProduct(state, action) {
            state.items.push(action.payload)
            console.log(action.payload);
            
        }

    }
})
export const {addProduct} = product.actions
export default product.reducer