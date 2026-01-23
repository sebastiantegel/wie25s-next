"use client";

import { useState } from "react";
import { Person } from "../models/Person";

export const StateObject = () => {
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 46, true),
  );

  const handleClick = () => {
    // Ändra vårt state

    // 1. Skapa en kopia
    //const copy: Person = { ...person };

    // 2. Ändra kopian
    //copy.age = person.age + 1; // Age blir här 47

    // 3. Spara nytt state
    //setPerson(copy);

    // Alternativt sätt (det vanliga sättet :))
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <input type="checkbox" checked={person.isMarried} readOnly />
      </div>

      <button onClick={handleClick}>Ändra</button>
    </>
  );
};
