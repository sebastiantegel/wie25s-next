import { createContext } from "react";

export class Person {
  name: string;
  age: number;
  isMarried: boolean;

  constructor(name: string, age: number, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

export const ObjectContext = createContext<Person>({
  name: "",
  age: 0,
  isMarried: false,
});
