import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json();
})

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
   
        data: [],
        loading: true,
    },
    reducers: {},
       
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
    }
});

export default dataSlice.reducer;