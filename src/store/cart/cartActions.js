import { addItemToCartReducer } from "./cartSlice";

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

export const addItemToCart = (cartItems,productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return addItemToCartReducer(newCartItems);
};

export const removeItemFromCart = (cartItems,productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return addItemToCartReducer(newCartItems);
};

export const clearItemFromCart = (cartItems,productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return addItemToCartReducer(newCartItems);
};
