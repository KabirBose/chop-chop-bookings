"use client";

import { signOut } from "next-auth/react";

export default function LogoutForm() {
  // signout user when button is clicked
  return (
    <div>
      <p>Are you sure you want to logout?</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
