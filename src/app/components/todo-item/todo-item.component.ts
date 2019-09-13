import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../model/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.complete
    }

    return classes
  }


  toggleCheck(todo: Todo) {
    //ui
    this.todo.complete = !this.todo.complete

    //server
    this.todoService.editTodo(todo).subscribe()
  }

  deleteCheck(todo: Todo) {
    this.deleteTodo.emit(todo)
  }
}
