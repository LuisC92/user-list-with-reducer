import React from "react";
import { ADD_USERS, GET_USERS, DELETE_USERS } from "../constants/Constants";
import { createContext, useReducer } from "react";

const initialState = { users: [] };

// create a reducer function
const reducer = (state, action) => {
  console.log("state: ", state);
  console.log("action: ", action);
  switch (action.type) {
    case GET_USERS:
      return { users: action.payload };
    case ADD_USERS:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USERS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state.users;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
