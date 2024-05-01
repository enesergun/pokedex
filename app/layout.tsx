import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "Catch 'em all in this interactive Pokedex! Explore a comprehensive list of Pokemon, with detailed information for each one. Discover their stats, types, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "container max-w-3xl mt-5")}>
        {children}
      </body>
    </html>
  );
}
