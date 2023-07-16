import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.scss']
})
export class LoginReactiveFormComponent {
  userId: number = 0;

  loginForm = new FormGroup({
    email: new FormControl("", {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    password: new FormControl("", {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }),
  })

  constructor(private location: Location, private translate: TranslateService,
    private router: Router) {}

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

  // onEnter(): void {
  //   const obtainedUserId: number = 1;
  //   this.router.navigate(['pma/main', obtainedUserId])
  // }
}
