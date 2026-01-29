"use client";

import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  // Skapa ett state med objekt i en lista
  const [todos, setTodos] = useState<Todo[]>([new Todo("Lära oss next")]);

  // Funktion för att lägga till en ny todo i vårt state
  const saveTodo = (todoText: string) => {
    // Anropa setTodos som kommer att ändra vårt state
    // [...todos] skapar en kopia av listan todos
    // [...todos, new Todo()] skapar ett nytt objekt sist i den nya listan
    setTodos([...todos, new Todo(todoText)]);
  };

  // Funktion för att ta bort ett objekt ur listan
  const handleRemove = (id: number) => {
    // Anropa setTodos för att ändra vårt state
    // todos.filter kommer att skapa en ny lista.
    // todos.filter((todo) => todo.id !== id) skapar en ny lista som bara tar bort den todo som användaren klickade på (baserat på id)
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Funktion för att ändra done till motsatsen för ett objekt
  const handleChange = (id: number) => {
    // Anropa setTodos för att ändra state
    setTodos(
      // todos.map kommer skapa en lika lång lista som todos är lång
      todos.map((todo) => {
        // Om vi hittar den todo som användaren klickade på
        if (todo.id === id) {
          // Skicka tillbaka en kopia på objektet med förändrad done
          return { ...todo, done: !todo.done };
        } else {
          // Annars skicka tillbaka ett orört objekt
          return todo;
        }
      })
    );
  };

  return (
    <>
      <h2>The Todo List</h2>
      <AddTodo saveTodo={saveTodo} />
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="flex gap-4 items-center">
              <span className={todo.done ? "line-through" : ""}>
                {todo.text}
              </span>
              <button
                onClick={() => {
                  handleRemove(todo.id);
                }}
                className="border border-amber-400 p-2 rounded"
              >
                Ta bort
              </button>
              <button
                onClick={() => {
                  handleChange(todo.id);
                }}
                className="border border-green-400 p-2 rounded"
              >
                Ändra
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
