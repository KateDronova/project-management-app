import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/app/boards/models/user-interface';
import { Observable } from 'rxjs';
import { ConfirmService } from './confirm.service';
import { UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';

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


  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
  //   return true;
  // };
}
