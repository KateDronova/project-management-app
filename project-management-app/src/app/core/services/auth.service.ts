import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: string = ''
  loggedIn: boolean = localStorage.getItem('currentUser') ? true : false
  private booleanInfoSubject = new BehaviorSubject<boolean>(this.loggedIn)
  booleanInfo$ = this.booleanInfoSubject.asObservable()

  constructor(private router: Router) {}

  updateLogInInfo(value: boolean) {
    this.booleanInfoSubject.next(value);
  }

  logIn(currentUserEmail: string): void { //comes from Login form
    this.updateLogInInfo(true);
    this.currentUser = currentUserEmail;
    localStorage.setItem('currentUser', currentUserEmail);
  }

  logOut(): void {
    this.updateLogInInfo(false);
    this.currentUser = '';
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/pma/welcome');
  }
}
