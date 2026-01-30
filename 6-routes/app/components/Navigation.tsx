"use client";

import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="pr-2">
      <ul className="flex gap-4">
        <li>
          <Link href={"/"}>Hem</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/todos"}>Todos</Link>
        </li>
      </ul>
    </nav>
  );
};
