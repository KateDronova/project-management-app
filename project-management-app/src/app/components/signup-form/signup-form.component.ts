import { Component} from '@angular/core';
import { Location } from '@angular/common';
import { SignUpForm } from 'src/app/models/signup';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  kindOfEnter = '';
  signupForm = new SignUpForm();

  constructor(private location: Location, private translate: TranslateService) {}

  // onEnter(): void {
  //   // this.kindOfEnter = this.signupLoginService.getKindOfEnter();
  // }

  saveUser() {
    console.log("User is saved")
  }

  goBack(): void {
    this.location.back();
  }
}
