import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../model/Todo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/todos'
  todoLimit: string = `limit=10`
  constructor(private http: HttpClient) { }

  //create
  addTodo(todo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(`${this.baseUrl}`, todo);
  }

  //get
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}?_${this.todoLimit}`)
  }

  //update
  editTodo(todo: Todo): Observable<any> {
    return this.http.put(`${this.baseUrl}/${todo.id}`, todo);
  }

  //delete_
  deleteTodo(todo: Todo): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${this.baseUrl}/${todo.id}`);
  }
}
