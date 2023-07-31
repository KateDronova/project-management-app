import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordsEqual]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordsEqualDirective,
    multi: true
  }]
})
export class PasswordsEqualDirective implements Validator {
  @Input('appPasswordsEqual') passwordToMatch!: string; // Input property to receive the password to match

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const confirmPassword = control.root.get(this.passwordToMatch)?.value;
    return (password === confirmPassword)? null : { passwordMismatch: true };
  }
}
