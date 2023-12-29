"use client";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <form className="flex justify-center items-center gap-3 flex-col">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
