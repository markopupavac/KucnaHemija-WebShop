import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  token: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.Kolicina = newQuantity;
        item.UkupnaCena = item.Kolicina * item.Cena;
      }
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.Kolicina++;
      item.UkupnaCena = item.Kolicina * item.Cena;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.Kolicina--;
      item.UkupnaCena = item.Kolicina * item.Cena;

      if (item.Kolicina === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    setItemQuantity(state, action) {
      // console.log(state);
      const item = state.cart.find((item) => item.id === action.payload.id);
      console.log(action, "AKCIJA");
      item.Kolicina = action.payload.val;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  updateCartQuantity,
  increaseItemQuantity,
  decreaseItemQuantity,
  setItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.Kolicina, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.Cena, 0);

export const getUkupanRacun = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.Cena * item.Kolicina, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.Kolicina ?? 0;
