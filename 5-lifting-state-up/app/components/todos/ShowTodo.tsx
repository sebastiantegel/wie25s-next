"use client";

import { Todo } from "@/app/models/Todo";
import { Button, ButtonType } from "../Button";

type ShowTodoProps = {
  todo: Todo;

  remove: (id: number) => void;
  toggle: (id: number) => void;
};

export const ShowTodo = ({ todo, remove, toggle }: ShowTodoProps) => {
  return (
    <li key={todo.id} className="flex gap-4 items-center">
      <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
      {/* <button onClick={() => remove(todo.id)}>Ta bort</button> */}
      <Button onClick={() => remove(todo.id)} type={ButtonType.danger}>
        Ta bort
      </Button>
      {/* <button onClick={() => toggle(todo.id)}>Ändra</button> */}
      <Button onClick={() => toggle(todo.id)} type={ButtonType.info}>
        Ändra
      </Button>
    </li>
  );
};
