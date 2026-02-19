"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartContext } from "./contexts/CartContext";
import { useReducer } from "react";
import { CartReducer } from "./reducers/CartReducer";
import { Header } from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Context + Reducer",
//   description: "Created by the awesome WIE25S",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Placera ett state och funktion för att ändra vårt state här
  // med hjälp av en reducer
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {
          // Placera vårt context överst i layout, det är
          // detta som gör att vi kommer åt varukorgen överallt
        }
        <CartContext.Provider value={{ cart, dispatch }}>
          <Header></Header>
          <main>{children}</main>
          <footer></footer>
        </CartContext.Provider>
      </body>
    </html>
  );
}
