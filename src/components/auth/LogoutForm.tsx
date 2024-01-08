"use client";

import { signOut, useSession } from "next-auth/react";

export default function LogoutForm() {
  const session = useSession();

  // signout user when button is clicked
  return (
    <div className="flex justify-center items-center flex-col gap-5 bg-gray-100 p-3 rounded-md">
      <p className="text-black">
        User:{" "}
        {session.status === "authenticated" &&
          (session.data?.user?.email as any)}
      </p>
      <p className="text-black">Are you sure you want to logout?</p>
      <button
        className="bg-fuchsia-400 p-2 rounded-md w-full"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
