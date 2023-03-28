import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES} from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
      ...cartItem,
      quantity: cartItem.quantity + 1
    } : cartItem)
  }
  return [...cartItems, {...productToAdd, quantity: 1}]
}
const removeCartItem = (cartItems, CartToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === CartToRemove.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(caItem => caItem.id !== CartToRemove.id);
  }

  return cartItems.map((cartItem) => cartItem.id === CartToRemove.id ? {
    ...cartItem,
    quantity: cartItem.quantity - 1
  } : cartItem)
}
const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
export const removeItemFromCart = (cartItems, CartToRemove) => {
  const newCartItems =  removeCartItem(cartItems, CartToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
export const clearItemFromCart = (cartItems, CartToRemove) => {
  const newCartItems = clearCartItem(cartItems, CartToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean);
