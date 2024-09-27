import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartSlice from "./AddCartSlice";

let store = configureStore({
  reducer: {
    product: productReducer,
    cartData: cartSlice,
  },
});
export default store;
