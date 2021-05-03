import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../model/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      "is-complete": this.todo.isComplete,
    };

    return classes;
  }

  toggleCheck(todo: Todo) {
    this.toggleTodo.emit(todo);
  }

  deleteCheck(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
