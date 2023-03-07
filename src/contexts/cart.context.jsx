import { createContext, useReducer } from 'react';
import  { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
      ...cartItem,
      quantity: cartItem.quantity + 1
    } : cartItem)
  }
  return [...cartItems, {...productToAdd, quantity: +1}]
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


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  total: 0,
})
const CART_ACTION_TYPES = {
  SET_CART_ITEMS:'SET_CART_ITEMS',
  SET_IS_CART_OPEN:'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
}

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default :
      new Error(`unhandled type ${type} in cartReducer`)
  }
}

export const CartProvider = ({children}) => {
  const [{cartItems,isCartOpen,cartCount,total}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0)
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
        cartItems:newCartItems,
        total: newCartTotal,
        cartCount:newCartCount
      })
    )
  }
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }
  const removeItemFromCart = (CartToRemove) => {
   const newCartItems =  removeCartItem(cartItems, CartToRemove);
    updateCartItemsReducer(newCartItems);
  }
  const clearItemFromCart = (CartToRemove) => {
    const newCartItems = clearCartItem(cartItems, CartToRemove);
    updateCartItemsReducer(newCartItems);
  }
  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    total,
  };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}