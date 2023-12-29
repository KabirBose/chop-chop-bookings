import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Bottombar from "@/components/shared/Bottombar";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chop Chop Bookings",
  description: "Keep track of your reservations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
        <Bottombar />
      </body>
    </html>
  );
}
