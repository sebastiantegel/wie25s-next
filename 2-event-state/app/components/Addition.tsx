"use client";

import { ChangeEvent, useState } from "react";

export const Addition = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const handleNumber1 = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber1(e.target.valueAsNumber);
  };

  const handleClick = () => {
    setSum(number1 + number2);
  };

  console.log(number1);

  return (
    <>
      <input type="number" value={number1} onChange={handleNumber1} />
      <input
        type="number"
        value={number2}
        onChange={(e) => {
          setNumber2(e.target.valueAsNumber);
        }}
      />
      <button onClick={handleClick}>Summera</button>
      <h2>{sum}</h2>
    </>
  );
};
