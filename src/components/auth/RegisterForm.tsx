"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-3 flex-col"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          className="text-black"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
