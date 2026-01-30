"use client";

import { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { ShowTodos } from "../components/todos/ShowTodos";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(1, "Learn next"),
    new Todo(2, "Learn react"),
    new Todo(3, "Learn routing"),
    new Todo(4, "Learn useEffect"),
  ]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  return (
    <>
      <h3>Todos</h3>
      <ShowTodos todos={todos} />
    </>
  );
};

export default Todos;
