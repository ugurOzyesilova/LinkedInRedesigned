import React, {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
} from "react";
import Reducer from "./Reducer";
import db, { auth, provider } from "../firebase";

export const initialState = {
  user: null,
};

export const Context = createContext(initialState); //GlobalContext

export const ContextProvider = (props) => {
  //Global Provider
  const [state, dispatch] = useReducer(Reducer, initialState);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "set__user",
          payload: result.user,
        });
        //console.log(result.user)
      })
      .catch((error) => alert(error.message));
  };

 // use it for wrap entire app, able to access all the props in components 

  return (
    <Context.Provider value={{ signIn: signIn, user: state.user }}>
      {props.children}
    </Context.Provider>
  );
};
