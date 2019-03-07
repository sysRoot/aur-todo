import { Todo } from './components/todo';
import 'reset-css';
import 'normalize.css';
import './styles/style.css';

export class App {
  constructor() {
    this.heading = 'A Simple Todo List';
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
