"use client";

import { Person } from "../models/Person";
import { Child } from "./Child";
import { ShowPerson } from "./ShowPerson";

export const Parent = () => {
  const person = new Person("Sebastian", 46, true);

  return (
    <div>
      <h3>Parent</h3>
      <Child greeting="Hej då" />
      <Child greeting="Lorem ipsum" />

      <ShowPerson person={person} />
    </div>
  );
};
