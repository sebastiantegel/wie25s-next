"use client";

import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoActionType } from "../../reducers/TodoReducer";

export const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id} className={`flex gap-4`}>
          <span className={`${t.done ? "line-through" : ""}`}>{t.text}</span>
          <button
            onClick={() => {
              dispatch({
                type: TodoActionType.REMOVED,
                payload: t.id.toString(),
              });
            }}
          >
            Ta bort
          </button>
          <button
            onClick={() => {
              dispatch({
                type: TodoActionType.TOGGLED,
                payload: t.id.toString(),
              });
            }}
          >
            Ändra
          </button>
        </li>
      ))}
    </ul>
  );
};
