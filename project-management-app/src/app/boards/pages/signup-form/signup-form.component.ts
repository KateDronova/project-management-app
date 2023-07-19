import { Component, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpForm } from '../../models/signup';
import { UsersService } from 'src/app/core/services/users.service';
import { UserInterface } from '../../models/user-interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})

export class SignupFormComponent {
  signupForm = new SignUpForm()

  show: boolean = false
  show2: boolean = false

  idCounter = 0
  name: string = ''
  surname: string = ''
  email: string = ''
  password: string = ''

  successfulRegistration: boolean = false;


  constructor(private location: Location, public route: ActivatedRoute,
    private router: Router, private userService: UsersService, private cdr: ChangeDetectorRef) {}


  loaded: boolean = false;
  appearSmoothly = setTimeout(() =>
    this.loaded = true, 100
  )

  onAddUser(item: UserInterface) {
    this.userService.addUser(item).subscribe();
    this.successfulRegistration = true;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.successfulRegistration = false;
      this.router.navigate(['pma/login'])
    }, 3000)
    this.cdr.markForCheck();
  }

  togglePassword() {
    this.show = !this.show;
  }

  togglePassword2() {
    this.show2 = !this.show2;
  }

  goBack(): void {
    this.location.back();
  }
}
