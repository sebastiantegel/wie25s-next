"use client";

import { useState } from "react";
import { ShowPerson } from "./ShowPerson";
import { Person } from "../models/Person";

type ChildProps = {
  greeting: string;
};

export const Child = (props: ChildProps) => {
  const [person, setPerson] = useState<Person>(new Person("Hanna", 46, true));

  return (
    <div>
      {props.greeting} - <ShowPerson person={person} />
    </div>
  );
};
