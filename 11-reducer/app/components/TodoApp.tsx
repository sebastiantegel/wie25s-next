"use client";

import { useReducer, useState } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

export const TodoApp = () => {
  //   const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [userInput, setUserInput] = useState<string>("");

  const add = (text: string) => {
    dispatch({
      type: "ADDED",
      payload: text,
    });
  };

  const remove = (id: number) => {
    dispatch({
      type: "REMOVED",
      payload: id.toString(),
    });
  };

  const toggle = (id: number) => {
    dispatch({
      type: "TOGGLED",
      payload: id.toString(),
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          add(userInput);
          setUserInput("");
        }}
        className="flex gap-4"
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="btn"
        />
        <button>Spara</button>
      </form>
      <ul>
        {todos.map((t) => (
          <li key={t.id} className={`flex gap-4`}>
            <span className={`${t.done ? "line-through" : ""}`}>{t.text}</span>
            <button
              onClick={() => {
                remove(t.id);
              }}
            >
              Ta bort
            </button>
            <button
              onClick={() => {
                toggle(t.id);
              }}
            >
              Ändra
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
