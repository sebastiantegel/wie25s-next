"use client";

import { Todo } from "@/app/models/Todo";
import { useParams } from "next/navigation";
import { useState } from "react";

const TodoDetails = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]"),
  );

  if (id) {
    const found = todos.find((t) => t.id === +id);

    if (found) {
      return (
        <>
          <h3>{found.text}</h3>
          <p>{found.id}</p>
          <input type="checkbox" checked={found.done} readOnly />
        </>
      );
    }
  }

  return <>Todo Details: {id}</>;
};

export default TodoDetails;
