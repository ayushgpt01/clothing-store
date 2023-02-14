import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...productToRemove, quantity: productToRemove.quantity - 1 }
      : item
  );
  return newCartItems.filter((item) => item.quantity);
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

const CART_ACTION_TYPES = {
  TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartReducer = (newCartItems) => {
    const newTotal = newCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const newItemCount = newCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, {
        cartItems: newCartItems,
        cartCount: newItemCount,
        totalPrice: newTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartReducer(newCartItems);
  };

  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    updateCartReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
