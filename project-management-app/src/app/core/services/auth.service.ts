import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserEmail: string = ''
  private booleanInfoSubject = new BehaviorSubject<boolean>(true);
  booleanInfo$ = this.booleanInfoSubject.asObservable();

  constructor(private router: Router) {}

  updateLogInInfo(value: boolean) {
    this.booleanInfoSubject.next(value);
  }

  logIn(currentUserEmail: string): void {
    this.updateLogInInfo(true);
    this.currentUserEmail = currentUserEmail;
  }


  logOut(): void {
    this.updateLogInInfo(false);
    this.currentUserEmail = '';
    this.router.navigateByUrl('/pma/welcome');
  }
}
