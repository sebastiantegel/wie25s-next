"use client";

import { useContext } from "react";
import { GrandChild } from "./GrandChild";
import { SimpleContext } from "../contexts/SimpleContext";

export const Child = () => {
  const theValue = useContext(SimpleContext);

  return (
    <>
      <h4>Child: {theValue}</h4>
      <GrandChild />
    </>
  );
};
