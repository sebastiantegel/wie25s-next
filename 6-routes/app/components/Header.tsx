"use client";

import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="w-full flex justify-end items-center h-[75]">
      <Navigation />
    </header>
  );
};
