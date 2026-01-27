export class Person {
  id: number;
  name: string;
  lastName: string;
  age: number;
  isMarried: boolean;

  constructor(name: string, lastName: string, age: number, isMarried: boolean) {
    this.id = Date.now();
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.isMarried = isMarried;
  }
}
