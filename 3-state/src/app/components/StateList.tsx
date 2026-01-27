"use client";

import { useState } from "react";
import { Person } from "../models/Person";

export const StateList = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", 46, true),
  ]);

  const handleAddPerson = () => {
    setPersons([...persons, new Person("Hanna", 46, true)]);
  };

  const handleRemove = (id: number) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  const handleBirthday = (id: number) => {
    setPersons(
      persons.map((person) => {
        if (person.id === id) {
          return { ...person, age: person.age + 1 };
        } else {
          return person;
        }
      }),
    );
  };

  return (
    <>
      <button onClick={handleAddPerson}>Lägg till</button>
      <div className="flex gap-10 flex-wrap">
        {persons.map((person) => {
          return (
            <div key={person.id}>
              <h3>{person.name}</h3>
              <p>{person.age}</p>
              <input type="checkbox" checked={person.isMarried} readOnly />
              <div className="flex flex-col">
                <button
                  onClick={() => {
                    handleRemove(person.id);
                  }}
                >
                  Ta bort
                </button>
                <button
                  onClick={() => {
                    handleBirthday(person.id);
                  }}
                >
                  Fyll år!
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
