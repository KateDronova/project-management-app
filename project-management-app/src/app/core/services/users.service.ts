import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

import { UserInterface } from 'src/app/boards/models/user-interface';
import { ConfirmService } from './confirm.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: UserInterface[] = []
  private url = `http://localhost:3000/users`

  constructor( private httpClient: HttpClient, private confirm: ConfirmService ) { }

  addUser(item: UserInterface): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(this.url, item);
  }

  changeUserInfo(item: UserInterface, id: number): Observable<UserInterface> {
    return this.httpClient.put<UserInterface>(`${this.url}/${id}`, item);
  }

  deleteUser(): Observable<UserInterface> {
    return this.httpClient.delete<UserInterface>(`${this.url}/${this.confirm.idToDelete}`);
  }

  correctPasswordCheck(emailToMatch: string, passwordToMatch: string): Observable<boolean> {
    return this.getCurrentUser(emailToMatch).pipe(
      map(user => user && user.password === passwordToMatch)
    );
  }

  getCurrentUser(currentUserEmail: string): Observable<UserInterface> {
    return this.httpClient.get<UserInterface[]>(`${this.url}?email=${currentUserEmail}`).pipe(
      map(users => users[0])
    );
  }

  emailExistsCheck(email: string): Observable<boolean> {
    return this.getUsersEmails().pipe(
      map((emails: string[]) => emails.includes(email))
    );
  }
  private getUsersEmails():Observable<string[]> {
    return this.httpClient.get<UserInterface[]>(this.url).pipe(
      map(users => users.map(user => user.email))
    )
  }
}
