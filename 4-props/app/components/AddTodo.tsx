"use client";

import { useState } from "react";

type AddTodoProps = {
  saveTodo: (text: string) => void;
};

export const AddTodo = (props: AddTodoProps) => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        // Avbryt formulärets standardbeteende (ladda om sidan)
        e.preventDefault();
        // Anropa funktion som finns i props-objektet
        // Denna funktion har skickats hit från parent-komponenten
        props.saveTodo(userInput);
        // Töm textrutan för att kunna mata in nästa todo
        setUserInput("");
      }}
      className="flex gap-4 items-center"
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="border border-blue-400 p-2 rounded">Lägg till</button>
    </form>
  );
};
