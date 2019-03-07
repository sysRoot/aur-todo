export class Todo {
  constructor(description) {
    this.description = description;
    this.id = Date.now();
    this.done = false;
  }
}
