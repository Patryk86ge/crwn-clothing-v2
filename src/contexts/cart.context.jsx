import { createContext, useState, useEffect } from 'react';

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
  setIsCartOpen: () => {
  },
  cartItems: [],
  addItemToCart: () => {
  },
  removeItemFromCart: () => {
  },
  clearItemFromCart: () => {
  },
  cartCount: 0,
  total:0,
})

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [catTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd))
  }
  const removeItemFromCart = (CartToRemove) => {
    setCartItem(removeCartItem(cartItems, CartToRemove))
  }
  const clearItemFromCart = (CartToRemove) => {
    setCartItem(clearCartItem(cartItems, CartToRemove))
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])

  const value = {isCartOpen,
    setIsCartOpen, addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    catTotal
  };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}