import { createContext, useState,useEffect } from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utile'
// as the actual value you wont to access

export const UserContext = createContext({
  setCurrentUsers: () => null,
  currentUser: null,
});

export const UserProvider = ({children}) => {

  const [currentUser,setCurrentUsers] = useState(null);
  const value = { currentUser,setCurrentUsers };

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user) =>{
      if (user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUsers(user)
      console.log(user);
    });
    return unsubscribe;
  },[]);

  return <UserContext.Provider
    value={value}
  >
    {children}
  </UserContext.Provider>
}