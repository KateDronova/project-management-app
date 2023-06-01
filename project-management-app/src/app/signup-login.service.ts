import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {
  // buttonText: string = '';
  // kindOfEnter: string = '';

  constructor() { }

  // getKindOfEnter(): Observable<string> {
    // const kindOfEnter = of(HeaderComponent);
    // return kindOfEnter;
  //   this.buttonText = "Sign up"
  // }
}
