import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    AddItem(state, action) {
      state.push(action.payload);
    },
    RemoveItem(state, action) {
      return state.filter((val, ind) => ind !== action.payload);
    },
  },
});
export const { AddItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
