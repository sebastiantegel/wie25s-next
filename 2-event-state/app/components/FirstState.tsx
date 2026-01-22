"use client";

import { useState } from "react";

export const FirstState = () => {
  //   const text = "Hej";
  const [text, setText] = useState<string>("Hej");

  const handleClick = () => {
    setText("Lorem ipsum");
  };

  return (
    <>
      <div onClick={handleClick}>{text}</div>
    </>
  );
};
