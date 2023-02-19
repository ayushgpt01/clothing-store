import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "CART",
  initialState: INITIAL_STATE,
  reducers: {
    toggleCartReducer: (state, action) => {
      state.isCartOpen = action.payload;
    },
    addItemToCartReducer: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const {toggleCartReducer,addItemToCartReducer} = cartSlice.actions;
export default cartSlice.reducer;
