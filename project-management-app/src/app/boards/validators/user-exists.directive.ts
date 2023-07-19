import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/core/services/users.service';


@Directive({
  selector: '[appEmailExists][ngModel],[appEmailExists][formControl]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => EmailExistsDirective),
    multi: true
  }]
})
export class EmailExistsDirective implements AsyncValidator {

  constructor(private userService: UsersService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    return this.userService.emailExistsCheck(email).pipe(
      map((exists: boolean) => (exists ? { emailExists: true } : null))
    );
  }
}
