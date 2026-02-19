"use client";

import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoActionType } from "../../reducers/TodoReducer";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState<string>("");
  const { dispatch } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dispatch({
          type: TodoActionType.ADDED,
          payload: userInput,
        });

        setUserInput("");
      }}
      className="flex gap-4"
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="btn"
      />
      <button>Spara</button>
    </form>
  );
};
