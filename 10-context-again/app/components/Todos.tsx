"use client";

import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const Todos = () => {
  const { todos, toggle, remove } = useContext(TodoContext);

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((t) => (
        <li key={t.id} className="flex gap-4">
          <span className={t.done ? "line-through" : ""}>{t.text}</span>
          <button
            onClick={() => {
              toggle(t.id);
            }}
          >
            Change
          </button>
          <button
            onClick={() => {
              remove(t.id);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
