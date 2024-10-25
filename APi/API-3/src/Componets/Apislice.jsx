import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { build } from "vite";

export const fetchApi = createAsyncThunk("fetchApi" , async () => {
    let response = await axios.get("https://fakestoreapi.com/products")
    let res = response.data
    return res
}) 
export const APi = createSlice({
    name : "Api",
    initialState : {data: [] , loading:true},
    reducers : {},

    extraReducers: (builder => {
        builder.addCase(fetchApi.pending , (sta))
    })
})