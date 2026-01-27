"use client";

import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([new Todo("Lära oss next")]);

  const saveTodo = (todoText: string) => {
    setTodos([...todos, new Todo(todoText)]);
  };

  const handleRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <h2>The Todo List</h2>
      <AddTodo saveTodo={saveTodo} />
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="flex gap-4 items-center">
              <span className={todo.done ? "line-through" : ""}>
                {todo.text}
              </span>
              <button
                onClick={() => {
                  handleRemove(todo.id);
                }}
                className="border border-amber-400 p-2 rounded"
              >
                Ta bort
              </button>
              <button
                onClick={() => {
                  handleChange(todo.id);
                }}
                className="border border-green-400 p-2 rounded"
              >
                Ändra
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
