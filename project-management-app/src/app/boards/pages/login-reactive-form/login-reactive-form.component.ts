import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { emailExistsValidator } from '../../validators/user-not-registered';
import { correctPasswordValidator } from '../../validators/correct-password';
import { Observable, map } from 'rxjs';

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
      ],
      asyncValidators: [
        emailExistsValidator(this.userService)
      ]
    }),
    password: new FormControl("", {
      validators: [
        Validators.required,
      ],
      asyncValidators: [
        correctPasswordValidator(this.userService)
      ]
    }),
  })

  constructor(private location: Location, private userService: UsersService,
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

  onEnter(): void {
    this.router.navigate(['pma/main']);
    // loggedIn = true;
  }
}
