"use client";

import { Todo } from "@/app/models/Todo";
import Link from "next/link";

type ShowTodosProps = {
  todos: Todo[];
};

export const ShowTodos = ({ todos }: ShowTodosProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.text}</Link>
        </li>
      ))}
    </ul>
  );
};
