import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.scss']
})
export class LoginReactiveFormComponent {
  fb = new FormBuilder();
  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)],
  })

  constructor(private location: Location, private translate: TranslateService,
    private formBuilder: FormBuilder) {}

  get email() { return this.loginForm.get('email'); }

  goBack(): void {
    this.location.back();
  }

  // onReset(): void {
  //   this.loginForm.reset();
  // }

  onEnter(): void {
    // console.warn(this.loginForm.value);
    if (true) {
      this.location.go("/main")
      this.location.historyGo(0)
    }
  }
}
