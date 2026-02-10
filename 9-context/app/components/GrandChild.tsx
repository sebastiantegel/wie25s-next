"use client";

import { useContext } from "react";
import { SimpleContext } from "../contexts/SimpleContext";
import { ObjectContext } from "../contexts/ObjectContext";

export const GrandChild = () => {
  const theValue = useContext(SimpleContext);
  const person = useContext(ObjectContext);

  return (
    <>
      GrandChild: {theValue} {person.name}
    </>
  );
};
