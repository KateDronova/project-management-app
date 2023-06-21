import { Component, ContentChild } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SignUpForm } from 'src/app/models/signup';
// import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signupForm = new SignUpForm();
  show: boolean = false;
  show2: boolean = false;

  constructor(private location: Location, private translate: TranslateService) {}

  loaded: boolean = false;
  appearSmoothly = setTimeout(() =>
    this.loaded = true, 100
  )

  saveUser() {
    // if (true) {
    //   this.location.go("/welcome")
    //   this.location.historyGo(0)
    // }
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
