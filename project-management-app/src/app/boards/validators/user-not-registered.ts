import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/core/services/users.service';

export function emailExistsValidator(userService: UsersService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.emailExistsCheck(control.value).pipe(
      map((exists: boolean) => (exists ? null : { emailNotExists: true }))
    );
  };
}
