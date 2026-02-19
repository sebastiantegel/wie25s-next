import { createContext, Dispatch } from "react";
import { Todo } from "../models/Todo";
import { ITodoAction } from "../reducers/TodoReducer";

type TodoContextType = {
  todos: Todo[];
  dispatch: Dispatch<ITodoAction>;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
});
