import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let STATUS = {
  IDLE: "idle",
  PENDING: "loading",
  ERROR: "error",
};
let product = createSlice({
  name: "prod",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fechdata.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fechdata.rejected, (state) => {
        state.status = STATUS.ERROR;
      })
      .addCase(fechdata.pending, (state) => {
        state.status = STATUS.PENDING;
      });
  },
});

export default product.reducer;

//MiddleWare
export const fechdata = createAsyncThunk("fetch/data", async () => {
  let response = await axios.get("https://fakestoreapi.com/products");

  return response.data;
});
