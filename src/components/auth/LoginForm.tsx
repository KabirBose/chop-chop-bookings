"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // use "credentials" provider and check against email and password in DB. do not redirect to another page
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      // if error, set error
      if (res.error) {
        setError("Invalid email or password");
        return;
      }

      // if success, redirect to "/bookings"
      router.replace("/bookings");

      // error
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-3 flex-col"
      >
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
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
