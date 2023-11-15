"use client";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../UserContext";
import Navbar from "../shared/navbar/navbar";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);

  function onRegister(e: any) {
    e.preventDefault();
    const data = { username, password };
    setUsername("");
    setPassword("");
    axios
      .post("http://localhost:4000/register", data, {
        withCredentials: true,
      })
      .then((res) => {
        // user.setUsername(res.data.username);
      });
  }

  return (
    <div className="flex-col ">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-1/3 bg-gray-500 p-10 rounded-lg border-2 border-gray-700">
          <h3 className="text-xl uppercase font-semibold text-white text-center mb-5">
            Register
          </h3>
          <form onSubmit={onRegister}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              className="w-full border border-gray-500 bg-gray-100 px-5 py-3 rounded-md outline-none my-2"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="w-full border border-gray-500 bg-gray-100 px-5 py-3 rounded-md outline-none my-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="submit"
              className="w-full bg-teal-500 p-3 rounded-md text-white outline-none my-2"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
