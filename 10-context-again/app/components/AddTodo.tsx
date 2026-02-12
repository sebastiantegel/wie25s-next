"use client";

import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState<string>("");
  const { add } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        add(userInput);
        setUserInput("");
      }}
    >
      <label htmlFor="todo">Todo: </label>
      <input
        type="text"
        placeholder="I.e. Learn next"
        id="todo"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};
