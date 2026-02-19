import { Todo } from "../models/Todo";

export enum TodoActionType {
  ADDED,
  REMOVED,
  TOGGLED,
}

export interface ITodoAction {
  type: TodoActionType;
  payload: string;
}

export const TodoReducer = (todos: Todo[], action: ITodoAction): Todo[] => {
  if (action.type === TodoActionType.ADDED) {
    return [...todos, new Todo(action.payload)];
  }

  if (action.type === TodoActionType.REMOVED) {
    return todos.filter((t) => t.id !== +action.payload);
  }

  if (action.type === TodoActionType.TOGGLED) {
    return todos.map((t) => {
      if (t.id === +action.payload) return { ...t, done: !t.done };
      else return t;
    });
  }

  return todos;
};
