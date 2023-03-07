import {createContext, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase/firebase.utile';
import  { createAction } from '../utils/reducer/reducer.utils';
// as the actual value you wont to access

export const UserContext = createContext({
  setCurrentUsers: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const userReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default :
      throw new Error(`unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null,
}
export const UserProvider = ({children}) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUsers = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
    )
  }

  const value = {currentUser, setCurrentUsers};

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUsers(user)
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider
    value={value}
  >
    {children}
  </UserContext.Provider>
}