export class Todo {
  id: number;
  text: string;
  done: boolean;

  constructor(text: string) {
    this.id = Date.now(); // Replace with UUID
    this.text = text;
    this.done = false;
  }
}
