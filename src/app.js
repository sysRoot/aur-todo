import { inject } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';
import { initialState } from './components/state';

import { Todo } from './components/todo';

import 'reset-css';
import 'normalize.css';
import './styles/style.css';

@inject(Store)
export class App {
  constructor(store) {
    this.heading = 'A Simple Todo List';
    this.todos = [];
    this.todoDescription = '';
  }

  bind() {
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  unbind() {
    this.subscription.unsubscribe();
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
