"use client";

import { useState } from "react";
import { Todo } from "../../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(1, "Test"),
    new Todo(2, "Next js"),
  ]);

  const addTodo = (todoText: string) => {
    setTodos([...todos, new Todo(Date.now(), todoText)]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
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
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} remove={removeTodo} toggle={toggleTodo} />
    </>
  );
};
