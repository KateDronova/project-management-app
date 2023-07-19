import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/core/services/users.service';

export function correctPasswordValidator(userService: UsersService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const emailToMatch = control.root.get('email')?.value;
    const passwordToMatch = control.value;
    return userService.correctPasswordCheck(emailToMatch, passwordToMatch).pipe(
      map((correct: boolean) => (correct ? null : { passwordIsCorrect: true }))
    );
  };
}
