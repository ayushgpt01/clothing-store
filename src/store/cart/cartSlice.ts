import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartState, CartItem } from "./cartTypes";

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "CART",
  initialState: INITIAL_STATE,
  reducers: {
    toggleCartReducer: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    addItemToCartReducer: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
  },
});

export const { toggleCartReducer, addItemToCartReducer } = cartSlice.actions;
export default cartSlice.reducer;
