import { Todo } from './components/todo';

export class App {
  constructor() {
    this.heading = 'Todos';
    this.todos = [];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(cur => cur.done === false);
  }

  toggleComplete(todo) {
    todo.done = !todo.done;
  }
}
