import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfirmService } from './confirm.service';
import { Task } from 'src/app/boards/models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskList: Task[] = []
  private url = `http://localhost:3000/tasks`

  constructor( private httpClient: HttpClient, private confirm: ConfirmService ) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url)
  }

  addTask(item: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url, item)
  }

  deleteTask(): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.url}/${this.confirm.idToDelete}`)
  }
}
