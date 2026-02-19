"use client";

import { MiniCart } from "./MiniCart";

export const Header = () => {
  return (
    <header className="flex gap-6 justify-end p-4">
      <nav>
        <ul className="flex gap-4">
          <li>Hem</li>
          <li>Om</li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <MiniCart></MiniCart>
    </header>
  );
};
