"use client";

import { ChangeEvent, useState } from "react";
import { Person } from "../models/Person";

export const StateForm = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", "", 46, true),
  ]);

  const [person, setPerson] = useState<Person>(new Person("", "", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      // e.target -> <input type="text" name="name" />
      // e.target.name -> "name"

      // e.target -> <input type="text" name="lastName" />
      // e.target.name -> "lastName"
      setPerson({ ...person, [e.target.name]: e.target.value });
    }

    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.name]: e.target.valueAsNumber });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.name]: e.target.checked });
    }
  };

  const handleAddPerson = () => {
    setPersons([...persons, { ...person, id: Date.now() }]);

    // Nollställ formulär
    setPerson(new Person("", "", 0, false));
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
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleAddPerson();
        }}
      >
        <input
          type="text"
          value={person.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          value={person.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <input
          type="number"
          value={person.age}
          onChange={handleChange}
          name="age"
        />
        <input
          type="checkbox"
          checked={person.isMarried}
          onChange={handleChange}
          name="isMarried"
        />
        <button>Lägg till</button>
      </form>
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
