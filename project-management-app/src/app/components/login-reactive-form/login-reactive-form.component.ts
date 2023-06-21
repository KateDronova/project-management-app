import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.scss']
})
export class LoginReactiveFormComponent {

  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
  })

  constructor(private location: Location, private translate: TranslateService) {}

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  loaded: boolean = false;
  appearSmoothly = setTimeout(() =>
    this.loaded = true, 100
  )

  show: boolean = false;
  togglePassword() {
    this.show = !this.show;
  }

  goBack(): void {
    this.location.back();
  }

  // onReset(): void {
  //   this.loginForm.reset();
  // }

  onEnter(): void {
    // console.warn(this.loginForm.value);
    // pageFor = 'definedUser'
  }
}
