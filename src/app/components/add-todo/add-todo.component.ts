import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"],
})
export class AddTodoComponent implements OnInit {
  @Input() isLoading: Boolean;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {
    this.title = "";
  }

  ngOnInit() {}

  submitTodo() {
    const todo = {
      title: this.title,
      isComplete: false,
    };
    this.addTodo.emit(todo);
    this.title = "";
  }
}
