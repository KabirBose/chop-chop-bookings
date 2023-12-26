"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    } else setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      // resets the form if fields are valid
      if (res.ok) {
        const form = e.target;
        form.reset();
        console.log("User registered successfully!");
      } else {
        console.log("User registration failed");

        // Since the response was not 'ok', we get the error message from the response
        const errorData = await res.json();
        // Display the error message to the user
        setError(errorData.message);
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-3 flex-col"
      >
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="text-black"
          type="text"
          placeholder="Username"
          name="username"
        />
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
