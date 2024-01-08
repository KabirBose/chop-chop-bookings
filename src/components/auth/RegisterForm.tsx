"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // if username, email, or pass fields are empty then set error
    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    } else setError("");

    try {
      // post the form data to the database (username, email, password)
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      // resets the form if fields are valid and redirects user to the "/login" page
      if (res.ok) {
        const form = e.target;
        form.reset();
        console.log("User registered successfully!");
        router.push("/login");

        //
      } else {
        // if the response was not 'ok', we get the error message from the response
        const errorData = await res.json();

        // display the error message to the user
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
          className="text-black p-1 rounded-md"
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="text-black p-1 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="text-black p-1 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className="bg-fuchsia-400 p-2 rounded-md w-full" type="submit">
          Register
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
