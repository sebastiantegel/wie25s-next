"use client";

import { ChangeEvent, useState } from "react";

export const SecondState = () => {
  const [userInput, setUserInput] = useState<string>("");

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setUserInput(e.target.value);
  //   };

  return (
    <>
      {/* <input type="text" value={userInput} onChange={handleChange} /> */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
    </>
  );
};
