import { createContext, useState,useEffect } from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utile'
// as the actual value you wont to access
import PRODUCT from '../shop-data.json'

export const ProductContext = createContext({
  products:[],

});

export const ProductProvider = ({children}) => {

  const [products,setProducts] = useState(PRODUCT);
  const value = { products };

  useEffect(()=>{

  },[]);

  return <ProductContext.Provider
    value={value}
  >
    {children}
  </ProductContext.Provider>
}