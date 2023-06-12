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
  showPassword = false;

  // @ContentChild(IonInput) input: IonInput;

  constructor(private location: Location, private translate: TranslateService) {}

  saveUser() {
    if (true) {
      this.location.go("/welcome")
      this.location.historyGo(0)
    }
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    // this.input.type = this.showPassword ? 'text' : 'password';
  }

  goBack(): void {
    this.location.back();
  }
}
