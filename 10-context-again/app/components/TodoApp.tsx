"use client";

import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { Todo } from "../models/Todo";
import { TodoContext } from "../contexts/TodoContext";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) return { ...t, done: !t.done };
        else return t;
      })
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, add: addTodo, remove: removeTodo, toggle: toggleTodo }}
    >
      <AddTodo />
      <Todos />
    </TodoContext.Provider>
  );
};
