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

  show: boolean = false;

  constructor(private location: Location, private translate: TranslateService) {}

  togglePassword() {
    this.show = !this.show;
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  goBack(): void {
    this.location.back();
  }

  // onReset(): void {
  //   this.loginForm.reset();
  // }

  onEnter(): void {
    // console.warn(this.loginForm.value);
    // if (true) {
    //   this.location.go("/main")
    //   this.location.historyGo(0)
    // }
  }
}
