import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../core/services/auth.service';


export const authGuardFunction = (): boolean | Observable<boolean> | Promise<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (localStorage.getItem('currentUser')) {
    return true;
  }
  router.navigate(['/pma/welcome']);
  return false;
}
