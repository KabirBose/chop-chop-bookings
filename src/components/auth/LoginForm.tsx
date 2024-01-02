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
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid email or password");
        return;
      }
      router.replace("/bookings");
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
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
