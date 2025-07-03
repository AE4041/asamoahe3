import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/molecule/Navbar";

import "./globals.css";

const interRegular = Inter({ variable: "--font-inter-regular", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmaneul Asamoah",
  description: "A fanatical frontend developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interRegular.variable}} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
