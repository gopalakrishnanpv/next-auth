import UserContext from "@/app/UserContext";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="flex items-center justify-between gap-5 p-5 bg-gray-200">
        <div className="flex items-center justify-start gap-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>
        <div>
          {username && <div>Logged in as {username}</div>}
          {!username && <div>Not logged in</div>}
        </div>
      </div>
    </UserContext.Provider>
  );
}
