"use client";

import { useState } from "react";
import { Button, ButtonType } from "../Button";

type AddTodoProps = {
  addTodo: (todoText: string) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // Här vill jag ändra listan todos.
        addTodo(userInput);

        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {/* <button>Spara</button> */}
      <Button type={ButtonType.default}>Spara</Button>
    </form>
  );
};
