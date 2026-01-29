"use client";

import { Todo } from "../../models/Todo";
import { ShowTodo } from "./ShowTodo";

type TodosProps = {
  todos: Todo[];

  remove: (id: number) => void;
  toggle: (id: number) => void;
};

export const Todos = ({ todos, remove, toggle }: TodosProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => {
        return (
          <ShowTodo key={todo.id} todo={todo} remove={remove} toggle={toggle} />
        );
      })}
    </ul>
  );
};
