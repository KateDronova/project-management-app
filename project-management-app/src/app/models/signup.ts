export class SignUpForm {
  name: string;
  surname: string;
  email: string;
  password: string;
  password2: string;

  constructor() {
    this.name = '';
    this.surname = '';
    this.email = '';
    this.password = '';
    this.password2 = '';
  }
}
