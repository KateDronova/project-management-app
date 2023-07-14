import { Component } from '@angular/core';
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

  constructor(private location: Location, public route: ActivatedRoute,
    private router: Router, private userService: UsersService) {}

  loaded: boolean = false;
  appearSmoothly = setTimeout(() =>
    this.loaded = true, 100
  )

  onAddUser(item: UserInterface) {
    this.userService.addUser(item).subscribe(() => {
      this.router.navigate(['pma/welcome'])
    });
  }
    // this.route.params.subscribe((params) => {
    //   this.userName = params.name;
    // })
    // this.signupForm.value;
    // this.signupForm.reset();


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
