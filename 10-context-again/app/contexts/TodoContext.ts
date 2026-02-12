import { createContext } from "react";
import { Todo } from "../models/Todo";

type TodoContextType = {
  todos: Todo[];
  add: (text: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  add: () => {},
  remove: () => {},
  toggle: () => {},
});
