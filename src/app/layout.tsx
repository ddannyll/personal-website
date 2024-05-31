import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utilities/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ddannyll",
  description: "daniel nguyen portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
