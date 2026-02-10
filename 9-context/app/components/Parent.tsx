"use client";

import { useState } from "react";
import { ObjectContext, Person } from "../contexts/ObjectContext";
import { SimpleContext } from "../contexts/SimpleContext";
import { Child } from "./Child";

export const Parent = () => {
  const [someText, setSomeText] = useState<string>("Hej hej");
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 46, true),
  );

  // 2. Placera context
  return (
    <>
      <ObjectContext.Provider value={person}>
        <SimpleContext.Provider value={someText}>
          <h2>Parent</h2>
          <button
            onClick={() => {
              setSomeText("Tjaba");
              setPerson({ ...person, name: "Hanna" });
            }}
          >
            Ändra
          </button>
          <Child />
        </SimpleContext.Provider>
      </ObjectContext.Provider>
    </>
  );
};
