"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

// allows the NextAuth "session provider" to be used in the app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
