import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitTodo() {
    const todo = {
      title: this.title,
      complete: false
    }

    this.addTodo.emit(todo)
  }

}
