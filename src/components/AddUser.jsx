import React, { useState, useContext } from "react";
import { ADD_USERS } from "../constants/Constants";
import { UserContext } from "../context/UserContext";
import { v4 as uuidv4 } from "uuid";

export default function AddUser() {
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const { dispatch } = useContext(UserContext);
  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_USERS, payload: { id: uuidv4(), ...newUser } });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
