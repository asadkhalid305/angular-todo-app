import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../model/Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodo(todo: Todo) {
    //delete from UI
    this.todos = this.todos.filter(item => item.id !== todo.id)
    //delete from server 
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    //add to server 
    this.todoService.addTodo(todo).subscribe(() => {
    //add to UI
      this.todos.push(todo)
    })
  }
}
