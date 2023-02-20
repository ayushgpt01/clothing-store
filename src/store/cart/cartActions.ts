import { addItemToCartReducer } from "./cartSlice";
import { CartItem } from "./cartTypes";
import { CategoryItem } from "../categories/categoriesType";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem) => {
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

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...productToRemove, quantity: productToRemove.quantity - 1 }
      : item
  );
  return newCartItems.filter((item) => item.quantity);
};

const clearCartItem = (cartItems: CartItem[], productToClear: CartItem) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return addItemToCartReducer(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return addItemToCartReducer(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  productToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return addItemToCartReducer(newCartItems);
};
