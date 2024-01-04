"use client";

import { signOut, useSession } from "next-auth/react";

export default function LogoutForm() {
  console.log(useSession());

  return (
    <div>
      <p>Are you sure you want to logout?</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
