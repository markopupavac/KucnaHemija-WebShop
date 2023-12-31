import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/korpa/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
