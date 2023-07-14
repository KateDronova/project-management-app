import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/app/boards/models/user-interface';
import { Observable } from 'rxjs';
import { ConfirmService } from './confirm.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: UserInterface[] = []
  private url = `http://localhost:3000/users`

  constructor( private httpClient: HttpClient, private confirm: ConfirmService ) { }

  addUser(item: UserInterface): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(this.url, item)
  }

  deleteUser(): Observable<UserInterface> {
    return this.httpClient.delete<UserInterface>(`${this.url}/${this.confirm.idToDelete}`)
  }
}
