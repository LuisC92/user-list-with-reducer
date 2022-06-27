import React, { useEffect, useContext } from "react";
import axios from "axios";
import { GET_USERS, DELETE_USERS } from "../constants/Constants";
import { UserContext } from "../context/UserContext";

export default function UserList() {
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      dispatch({ type: GET_USERS, payload: res.data });
    });
  }, []);
  return (
    <div>
      <h1>UserList</h1>
      {state.users.map((user) => (
        <div key={user.id}>
          {console.log(user)}
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button
            onClick={() => dispatch({ type: DELETE_USERS, payload: user.id })}
          >
            Delete User
          </button>
        </div>
      ))}
    </div>
  );
}
