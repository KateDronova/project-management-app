import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false
  currentUserEmail: string = ''

  constructor(private router: Router) {}

  logIn(currentUserEmail: string) {
    this.loggedIn = true;
    this.currentUserEmail = currentUserEmail;
    console.log(this.loggedIn);
    console.log(this.currentUserEmail);
  }


  logOut() {
    this.loggedIn = false;
    this.currentUserEmail = '';
    this.router.navigateByUrl('/pma/welcome')
    console.log(this.loggedIn);
    console.log(this.currentUserEmail);
  }
}
