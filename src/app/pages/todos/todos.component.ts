import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../model/Todo";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  isLoading: Boolean;

  constructor(private todoService: TodoService) {
    this.isLoading = false
  }

  ngOnInit() {
    this.isLoading = true;
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  addTodo(todo: Todo) {
    //add to server
    this.isLoading = true;
    this.todoService.addTodo(todo).subscribe(() => {
      //add to UI
      this.todos.push(todo);
      this.isLoading = false;
    });
  }

  toggleTodo(todo: Todo) {
    //toggle check on server
    this.isLoading = true;
    this.todoService.editTodo(todo).subscribe(() => {
      //toggle check on UI
      this.todos = this.todos.map((item) => {
        if (item.id === todo.id) {
          item.isComplete = !item.isComplete;
        }
        return item;
      });
      this.isLoading = false;
    });
  }

  deleteTodo(todo: Todo) {
    //delete from server
    this.isLoading = true;
    this.todoService.deleteTodo(todo).subscribe(() => {
      //delete from UI
      this.todos = this.todos.filter((item) => item.id !== todo.id);
      this.isLoading = false;
    });
  }
}
